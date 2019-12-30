////////////////////////////////////////////////////////////////////////////////
// class UI
////////////////////////////////////////////////////////////////////////////////

function UI() {
   this.renderer = new Renderer();
 }
 
 UI.prototype.setObjects = function(objects) {
   this.objects = objects;
   this.objects.splice(0, 0, new Light());
   this.renderer.setObjects(this.objects);
 };
 
 UI.prototype.update = function(timeSinceStart) {
   this.modelview = makeLookAt(eye.elements[0], eye.elements[1], eye.elements[2], 0, 0, 0, 0, 1, 0);
   this.projection = makePerspective(55, 1, 0.1, 100);
   this.modelviewProjection = this.projection.multiply(this.modelview);
   this.renderer.update(this.modelviewProjection, timeSinceStart);
 };
 
 UI.prototype.render = function() {
   this.renderer.render();
 };
 
 UI.prototype.selectLight = function() {
   this.renderer.selectedObject = this.objects[0];
 };
 
 UI.prototype.addSphere = function() {
   this.objects.push(new Sphere(Vector.create([0, 0, 0]), 0.25, nextObjectId++));
   this.renderer.setObjects(this.objects);
 };
 
 UI.prototype.addCube = function() {
   this.objects.push(new Cube(Vector.create([-0.25, -0.25, -0.25]), Vector.create([0.25, 0.25, 0.25]), nextObjectId++));
   this.renderer.setObjects(this.objects);
 };
 
 UI.prototype.updateMaterial = function() {
   var newMaterial = parseInt(document.getElementById('material').value, 10);
   if(material != newMaterial) {
     material = newMaterial;
     this.renderer.setObjects(this.objects);
   }
 };
 
 UI.prototype.updateGlossiness = function() {
   var newGlossiness = parseFloat(document.getElementById('glossiness').value);
   if(isNaN(newGlossiness)) newGlossiness = 0;
   newGlossiness = Math.max(0, Math.min(1, newGlossiness));
   if(material == MATERIAL_GLOSSY && glossiness != newGlossiness) {
     this.renderer.pathTracer.sampleCount = 0;
   }
   glossiness = newGlossiness;
 };
 
 ////////////////////////////////////////////////////////////////////////////////
 // main program
 ////////////////////////////////////////////////////////////////////////////////
 
 var gl;
 var ui;
 var error;
 var canvas;
 var inputFocusCount = 0;
 
 var angleX = 0;
 var angleY = 0;
 var zoomZ = 2.5;
 var eye = Vector.create([0, 0, 0]);
 var light = Vector.create([0.4, 0.5, -0.6]);
 
 var nextObjectId = 0;
 
 var MATERIAL_DIFFUSE = 0;
 var MATERIAL_MIRROR = 1;
 var MATERIAL_GLOSSY = 2;
 var material = MATERIAL_DIFFUSE;
 var glossiness = 0.6;
 
 function tick(timeSinceStart) {
   eye.elements[0] = zoomZ * Math.sin(angleY) * Math.cos(angleX);
   eye.elements[1] = zoomZ * Math.sin(angleX);
   eye.elements[2] = zoomZ * Math.cos(angleY) * Math.cos(angleX);
 
   document.getElementById('glossiness-factor').style.display = (material == MATERIAL_GLOSSY) ? 'inline' : 'none';
 
   ui.updateMaterial();
   ui.updateGlossiness();
   ui.update(timeSinceStart);
   ui.render();
 }
 
 window.onload = function() {
   gl = null;
   error = document.getElementById('error');
   canvas = document.getElementById('canvas');
   try { gl = canvas.getContext('experimental-webgl'); } catch(e) {}
 
   if(gl) {
     error.innerHTML = 'Loading...';
 
     // keep track of whether an <input> is focused or not (will be no only if inputFocusCount == 0)
     var inputs = document.getElementsByTagName('input');
     for(var i= 0; i < inputs.length; i++) {
       inputs[i].onfocus = function(){ inputFocusCount++; };
       inputs[i].onblur = function(){ inputFocusCount--; };
     }
 
     material = parseInt(document.getElementById('material').value, 10);
     ui = new UI();
     ui.setObjects([new Sphere(Vector.create([0, -0.5, 0]), 0.5, nextObjectId++)]); // SAW initial object
     var start = new Date();
     error.style.zIndex = -1;
     setInterval(function(){ tick((new Date() - start) * 0.001); }, 1000 / 60);
   } else {
     error.innerHTML = 'Your browser does not support WebGL.<br>Please see <a href="http://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">Getting a WebGL Implementation</a>.';
   }
 };
 
 function elementPos(element) {
   var x = 0, y = 0;
   while(element.offsetParent) {
     x += element.offsetLeft;
     y += element.offsetTop;
     element = element.offsetParent;
   }
   return { x: x, y: y };
 }
 
 function eventPos(event) {
   return {
     x: event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
     y: event.clientY + document.body.scrollTop + document.documentElement.scrollTop
   };
 }
 
 function canvasMousePos(event) {
   var mousePos = eventPos(event);
   var canvasPos = elementPos(canvas);
   return {
     x: mousePos.x - canvasPos.x,
     y: mousePos.y - canvasPos.y
   };
 }
 
 var mouseDown = false, oldX, oldY;
 
 document.onmousedown = function(event) {
   var mouse = canvasMousePos(event);
   oldX = mouse.x;
   oldY = mouse.y;
 
   if(mouse.x >= 0 && mouse.x < 512 && mouse.y >= 0 && mouse.y < 512) {
 
    mouseDown = true;
 
    // disable selection because dragging is used for rotating the camera and moving objects
     return false;
   }
 
   return true;
 };
 
 document.onmousemove = function(event) {
   var mouse = canvasMousePos(event);
 
   if(mouseDown) {
     // update the angles based on how far we moved since last time
     angleY -= (mouse.x - oldX) * 0.01;
     angleX += (mouse.y - oldY) * 0.01;
 
     // don't go upside down
     angleX = Math.max(angleX, -Math.PI / 2 + 0.01);
     angleX = Math.min(angleX, Math.PI / 2 - 0.01);
 
     // clear the sample buffer
     ui.renderer.pathTracer.sampleCount = 0;
 
     // remember this coordinate
     oldX = mouse.x;
     oldY = mouse.y;
   }
 };
 
 document.onmouseup = function(event) {
   mouseDown = false;
 
   var mouse = canvasMousePos(event);
   ui.mouseUp(mouse.x, mouse.y);
 };
 
 