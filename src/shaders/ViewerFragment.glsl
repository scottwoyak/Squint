precision highp float;

// interpolated values from the vertex shader
varying vec3 vNormal;
varying vec3 vVertex;
varying vec3 vShadowVertex;
varying vec3 vModelVertex;

uniform mat4 model;
uniform vec3 uEye;
uniform bool uOrthographic;

#define NORMAL 0
#define CONTOUR_PLANES 1
#define CONTOUR_VALUES 2
#define LIGHT_AND_SHADOW 3
#define HIGHLIGHT_TERMINATOR 4
#define HIGHLIGHT_SHADOW 5
#define EMPHASIZE_HIGHLIGHTS 6

uniform int uRenderMode;

// these are value between 0-1
uniform float uDiffuseIntensity;
uniform float uAmbientIntensity;
uniform float uSpecularIntensity;

// the colors we use to represent our lightest and darkest values
uniform vec3 uWhiteColor;
uniform vec3 uBlackColor;

uniform vec3 uLightPos;
uniform bool uPointLight;
uniform float uFalloff;
uniform float uLightIntensity;
uniform float uLightIntensityAtSource;

uniform bool uUseShadows;
uniform sampler2D uShadowTexture;

uniform vec3 uFloorCenter;
uniform float uFloorRadius;
uniform bool uRenderingFloor;
uniform bool uShowGrid;
#define MAX_CONTOURS 9
uniform int uNumContours;
uniform vec3 uContourColors[9];
uniform float uContourAngles[9];
uniform bool uShowHighlights;
uniform float uShininess;

// For contour shading, the minimum specular contribution required to
// show something as a highlight
const float SPECULAR_THRESHOLD = 0.06;

bool uShowTerminator = true;

bool in_shadow()
{
   if (uUseShadows == false)
   {
      return false;
   }

   // The vertex location rendered from the light source is almost in Normalized
   // Device Coordinates (NDC), but the perspective division has not been
   // performed yet. Perform the perspective divide. The (x,y,z) vertex location
   // components are now each in the range [-1.0,+1.0].
   // vec3 vertex_relative_to_light = v_Vertex_relative_to_light.xyz / v_Vertex_relative_to_light.w;
   vec3 vertex = vShadowVertex;

   // Convert the the values from Normalized Device Coordinates (range [-1.0,+1.0])
   // to the range [0.0,1.0]. This mapping is done by scaling
   // the values by 0.5, which gives values in the range [-0.5,+0.5] and then
   // shifting the values by +0.5.
   vertex = vertex * 0.5 + 0.5;

   // Get the z value of this fragment in relationship to the light source.
   // This value was stored in the shadow map (depth buffer of the frame buffer)
   // which was passed to the shader as a texture map.
   // vec4 textureValue = texture2D(uShadowSampler, vertex.xy);

   // The texture map contains a single depth value for each pixel. However,
   // the texture2D sampler always returns a color from a texture. For a
   // gl.DEPTH_COMPONENT texture, the color contains the depth value in
   // each of the color components. If the value was d, then the color returned
   // is (d,d,d,1). This is a "color" (depth) value between [0.0,+1.0].
   float shadowmap_distance = texture2D(uShadowTexture, vertex.xy).r;

   // Test the distance between this fragment and the light source as
   // calculated using the shadowmap transformation (vertex_relative_to_light.z) and
   // the smallest distance between the closest fragment to the light source
   // for this location, as stored in the shadowmap. When the closest
   // distance to the light source was saved in the shadowmap, some
   // precision was lost. Therefore we need a small tolerance factor to
   // compensate for the lost precision.
   float tol = 0.001;
   if (vertex.z <= shadowmap_distance + tol)
   {
      // This surface receives full light because it is the closest surface
      // to the light.
      return false;
   }
   else
   {
      // This surface is in a shadow because there is a closer surface to
      // the light source.
      return true;
   }
}

vec4 val2Color(float val) { return vec4(mix(uBlackColor, uWhiteColor, val), 1.0); }

vec4 val2ContourColor(float val)
{
   val = clamp(val, 0.0, 1.0);
   for (int i = 0; i < MAX_CONTOURS; i++)
   {
      float max = (float(i) + 1.0) / float(uNumContours);
      if (val <= max)
      {
         return vec4(uContourColors[(MAX_CONTOURS - 1) - i], 1.0);
      }
   }
}

float getDiffuse(vec3 normal, vec3 toLight)
{
   float vDot = clamp(dot(normal, toLight), 0.0, 1.0);
   float diffuse = uDiffuseIntensity * vDot;
   return diffuse;
}

float getSpecular(vec3 normal, vec3 toLight, vec3 toEye)
{
   float specular = 0.0;

   if (uShowHighlights)
   {
      vec3 reflection = normalize(2.0 * dot(normal, toLight) * normal - toLight);
      float cosAngle = clamp(dot(reflection, toEye), 0.0, 1.0); // clamp to avoid values > 90 deg
      specular = uSpecularIntensity * (uShininess / 15.0) * pow(cosAngle, uShininess);
   }

   return specular;
}

float getDistancePtToPlane(vec3 pt, vec3 plane)
{
   float a = plane.x;
   float b = plane.y;
   float c = plane.z;
   float d = -(a * a + b * b + c * c);

   return -(a * pt.x + b * pt.y + c * pt.z + d) / sqrt(a * a + b * b + c * c);
}

float getLightDistance(vec3 lightPos)
{
   if (uPointLight)
   {
      return length(lightPos - vVertex);
   }
   else
   {
      return getDistancePtToPlane(vVertex, lightPos);
   }
}

float getValueFromLight(vec3 normal, vec3 toLight, vec3 toEye)
{
   float diffuse = getDiffuse(normal, toLight);
   float specular = getSpecular(normal, toLight, toEye);

   float falloff = 1.0;
   if (uFalloff > 0.0)
   {
      float vDot = dot(normal, toLight);

      float vDistance = getLightDistance(uLightPos);
      falloff = uLightIntensityAtSource / (vDistance * vDistance);

      // the light only shines one way
      if (vDistance < 0.0)
      {
         diffuse = 0.0;
         specular = 0.0;
      }
   }

   return uAmbientIntensity + uLightIntensity * falloff * (diffuse + specular);
}

vec4 getContourPlaneColor(float vDot, vec3 normal, vec3 toLight, vec3 toEye)
{
   float specular = getSpecular(normal, toLight, toEye);
   if (specular > SPECULAR_THRESHOLD)
   {
      return val2Color(uAmbientIntensity + uDiffuseIntensity + uSpecularIntensity);
   }

   float angle = (180.0 / 3.1415926) * acos(vDot);
   if (angle > 90.0)
   {
      return val2Color(uAmbientIntensity);
   }
   else
   {
      for (int i = 0; i < MAX_CONTOURS; i++)
      {
         if (i < uNumContours)
         {
            if (angle < uContourAngles[i])
            {
               return vec4(uContourColors[i], 1.0);
            }
         }
      }
   }
}

vec4 getContourValueColor(float vDot, vec3 normal, vec3 toLight, vec3 toEye)
{
   float specular = getSpecular(normal, toLight, toEye);
   if (specular > SPECULAR_THRESHOLD)
   {
      return vec4(1.0, 1.0, 1.0, 1.0);
   }

   float val = getValueFromLight(normal, toLight, toEye);
   return val2ContourColor(val);
}

float round(float val) { return floor(val + 0.5); }

float getFloorGridAdjustment(float dist)
{
   float thickness = 0.001;
   float alias = 0.005;

   if (dist < (thickness + alias))
   {
      if (dist < thickness)
      {
         return 0.5;
      }
      else
      {
         return 0.5 * (1.0 + (dist - thickness) / alias);
      }
   }
   else
   {
      return 1.0;
   }
}

vec4 getFloorColor(bool inShadow, vec3 normal, vec3 toLight, vec3 toEye)
{
   vec4 fragColor;

   // gradiate out the background from half transparent to full transparency
   vec3 center = (model * vec4(uFloorCenter, 1.0)).xyz;
   float dist = length(center - vVertex);
   float a = 0.5 * (1.0 - dist / uFloorRadius);

   float gridFactor = 1.0;
   if (uShowGrid)
   {
      float circle = getFloorGridAdjustment(abs(dist - round(dist)));
      float x = getFloorGridAdjustment(abs(vModelVertex.x - round(vModelVertex.x)));
      float z = getFloorGridAdjustment(abs(vModelVertex.z - round(vModelVertex.z)));

      gridFactor = min(circle, min(x, z));
   }

   float val = 0.0;
   if (inShadow)
   {
      val = uAmbientIntensity;
   }
   else
   {
      val = getValueFromLight(normal, toLight, toEye);
   }

   fragColor = val2Color(gridFactor * val);
   fragColor.a = a;

   return fragColor;
}

void main()
{
   vec3 toLight;
   if (uPointLight)
   {
      toLight = normalize(uLightPos - vVertex);
   }
   else
   {
      toLight = normalize(uLightPos);
   }

   bool inShadow = in_shadow();

   vec3 toEye;
   if (uOrthographic)
   {
      toEye = vec3(0.0, 0.0, 1.0);
   }
   else
   {
      toEye = normalize(uEye - vVertex);
   }

   vec3 normal = normalize(vNormal); // vNormal is interpolated and nolonger normal

   // swap normals for back facing triangles
   if (dot(normal, toEye) < 0.0)
   {
      normal = -normal;
   }

   // compute diffuse contribution = cos of angle between the vectors (dot product)
   float vDot = dot(normal, toLight);

   vec4 fragColor;
   if (uRenderingFloor)
   {
      fragColor = getFloorColor(inShadow, normal, toLight, toEye);
   }
   else
   {
      if (uRenderMode == CONTOUR_PLANES)
      {
         if (inShadow)
         {
            fragColor = val2Color(uAmbientIntensity);
         }
         else
         {
            fragColor = getContourPlaneColor(vDot, normal, toLight, toEye);
         }
      }
      else if (uRenderMode == CONTOUR_VALUES)
      {
         if (inShadow)
         {
            fragColor = val2ContourColor(uAmbientIntensity);
         }
         else
         {
            fragColor = getContourValueColor(vDot, normal, toLight, toEye);
         }
      }
      else
      {
         vec4 highlightColor = vec4(0.0, 0.7, 0.7, 1.0);

         if (inShadow)
         {
            if (uRenderMode == HIGHLIGHT_SHADOW)
            {
               fragColor = highlightColor;
            }
            else if (uRenderMode == LIGHT_AND_SHADOW)
            {
               fragColor = val2Color(uAmbientIntensity);
            }
            else
            {
               // when in shadow, apply slight shading as if the light
               // were coming from the eye.
               vec3 toShadowLight = vec3(0.0, 0.0, 1.0);
               float val = getValueFromLight(normal, toShadowLight, toEye) / 20.0;
               fragColor = val2Color(uAmbientIntensity + val);
            }
         }
         else
         {
            if (uRenderMode == LIGHT_AND_SHADOW)
            {
               fragColor = val2Color(uAmbientIntensity + 0.75 * uDiffuseIntensity);
               vec4 shadowColor = val2Color(uAmbientIntensity);

               float vDot = dot(normal, toLight);
               float angle = (180.0 / 3.1415926) * acos(vDot);
               float range = 8.0; // degrees
               float percentTerminator = clamp((angle - (90.0 - range)) / (range / 2.0), 0.0, 1.0);
               fragColor = mix(fragColor, shadowColor, percentTerminator);
            }
            else if (uRenderMode == HIGHLIGHT_SHADOW || uRenderMode == HIGHLIGHT_TERMINATOR)
            {
               // fade highlighting from terminator through the shadow
               float val = getValueFromLight(normal, toLight, toEye);
               fragColor = val2Color(val);

               float vDot = dot(normal, toLight);
               float angle = (180.0 / 3.1415926) * acos(vDot);
               float range = 8.0; // degrees
               float percentTerminator;

               if (uRenderMode == HIGHLIGHT_SHADOW)
               {
                  percentTerminator = clamp((angle - (90.0 - range)) / (range), 0.0, 1.0);
               }
               else
               {
                  if (angle > 90.0)
                  {
                     range = 2.0;
                     percentTerminator = clamp(1.0 - (angle - 90.0) / range, 0.0, 1.0);
                  }
                  else
                  {
                     percentTerminator = clamp((angle - (90.0 - range)) / (range), 0.0, 1.0);
                  }
               }
               fragColor = mix(fragColor, highlightColor, percentTerminator);
            }
            else
            {
               float val = getValueFromLight(normal, toLight, toEye);
               fragColor = val2Color(val);
            }
         }
      }
   }

   gl_FragColor = fragColor;
}