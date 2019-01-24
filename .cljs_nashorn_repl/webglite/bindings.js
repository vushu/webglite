// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webglite.bindings');
goog.require('cljs.core');
webglite.bindings.create_canvas = (function webglite$bindings$create_canvas(width,height){
var canvas = document.createElement("CANVAS");
var body = cljs.core.get.call(null,document.getElementsByTagName("body"),(0));
canvas.width = width;

canvas.height = height;

canvas.style.zIndex = (8);

canvas.style.border = "1px solid";

return document.body.appendChild(canvas);
});
if((typeof webglite !== 'undefined') && (typeof webglite.bindings !== 'undefined') && (typeof webglite.bindings.gl !== 'undefined')){
} else {
webglite.bindings.gl = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
webglite.bindings.get_context = (function webglite$bindings$get_context(canvas,gltype){
return cljs.core.reset_BANG_.call(null,webglite.bindings.gl,canvas.getContext(gltype));
});
webglite.bindings.not_nil = (function webglite$bindings$not_nil(){
return !((cljs.core.deref.call(null,webglite.bindings.gl) == null));
});
/**
 * type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
 */
webglite.bindings.create_shader = (function webglite$bindings$create_shader(type){
return cljs.core.deref.call(null,webglite.bindings.gl).createShader(type);
});
webglite.bindings.clear_color = (function webglite$bindings$clear_color(r,g,b,a){
return cljs.core.deref.call(null,webglite.bindings.gl).clearColor(r,g,b,a);
});
webglite.bindings.clear = (function webglite$bindings$clear(glenum){
return cljs.core.deref.call(null,webglite.bindings.gl).clear(glenum);
});
webglite.bindings.viewport = (function webglite$bindings$viewport(x,y,width,height){
return cljs.core.deref.call(null,webglite.bindings.gl).viewport(x,y,width,height);
});
/**
 * shader A WebGLShader object in which to set the source code.
 * source DOMString containing the GLSL source code to set.
 */
webglite.bindings.shader_source = (function webglite$bindings$shader_source(source,code){
return cljs.core.deref.call(null,webglite.bindings.gl).shaderSource(source,code);
});
/**
 * shader A fragment or vertex WebGLShader.
 */
webglite.bindings.compile_shader = (function webglite$bindings$compile_shader(shader){
return cljs.core.deref.call(null,webglite.bindings.gl).compileShader(shader);
});
/**
 * Return the info log of the shader
 */
webglite.bindings.get_shader_info_log = (function webglite$bindings$get_shader_info_log(shader){
return shader.getShaderInfoLog();
});
webglite.bindings.get_program_info_log = (function webglite$bindings$get_program_info_log(program){
return cljs.core.deref.call(null,webglite.bindings.gl).getProgramInfoLog(program);
});
webglite.bindings.get_program_parameter = (function webglite$bindings$get_program_parameter(program,glenum){
return cljs.core.deref.call(null,webglite.bindings.gl).getProgramParameter(program,glenum);
});
webglite.bindings.get_shader_parameter = (function webglite$bindings$get_shader_parameter(shader,glenum){
return cljs.core.deref.call(null,webglite.bindings.gl).getShaderParameter(shader,glenum);
});
/**
 * does as it says
 */
webglite.bindings.delete_shader = (function webglite$bindings$delete_shader(shader){
return shader.deleteShader();
});
webglite.bindings.create_program = (function webglite$bindings$create_program(){
return cljs.core.deref.call(null,webglite.bindings.gl).createProgram();
});
webglite.bindings.attach_shader = (function webglite$bindings$attach_shader(program,shader){
return cljs.core.deref.call(null,webglite.bindings.gl).attachShader(program,shader);
});
webglite.bindings.link_program = (function webglite$bindings$link_program(program){
return cljs.core.deref.call(null,webglite.bindings.gl).linkProgram(program);
});
webglite.bindings.delete_program = (function webglite$bindings$delete_program(program){
return cljs.core.deref.call(null,webglite.bindings.gl).deleteProgram(program);
});
webglite.bindings.get_attrib_location = (function webglite$bindings$get_attrib_location(program,attribute){
return cljs.core.deref.call(null,webglite.bindings.gl).getAttribLocation(program,attribute);
});
webglite.bindings.uniform4fv = (function webglite$bindings$uniform4fv(attribute,rgba){
return cljs.core.deref.call(null,webglite.bindings.gl).uniform4fv(attribute,rgba);
});
webglite.bindings.create_buffer = (function webglite$bindings$create_buffer(){
return cljs.core.deref.call(null,webglite.bindings.gl).createBuffer();
});
webglite.bindings.bind_buffer = (function webglite$bindings$bind_buffer(array_buffer,position_buffer){
return cljs.core.deref.call(null,webglite.bindings.gl).bindBuffer(array_buffer,position_buffer);
});
/**
 * example in javascript:
 * gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
 */
webglite.bindings.buffer_data = (function webglite$bindings$buffer_data(array_buffer,positions,gl_enum){
return cljs.core.deref.call(null,webglite.bindings.gl).bufferData(array_buffer,positions,gl_enum);
});
webglite.bindings.create_vertex_array = (function webglite$bindings$create_vertex_array(){
return cljs.core.deref.call(null,webglite.bindings.gl).createVertexArray();
});
webglite.bindings.bind_vertex_array = (function webglite$bindings$bind_vertex_array(vertex_array){
return cljs.core.deref.call(null,webglite.bindings.gl).bindVertexArray(vertex_array);
});
webglite.bindings.enable_vertex_attrib_array = (function webglite$bindings$enable_vertex_attrib_array(position_attribute_location){
return cljs.core.deref.call(null,webglite.bindings.gl).enableVertexAttribArray(position_attribute_location);
});
webglite.bindings.vertex_attrib_pointer = (function webglite$bindings$vertex_attrib_pointer(attribute_location,size,type,normalize,stride,offset){
return cljs.core.deref.call(null,webglite.bindings.gl).vertexAttribPointer(attribute_location,size,type,normalize,stride,offset);
});
webglite.bindings.use_program = (function webglite$bindings$use_program(program){
return cljs.core.deref.call(null,webglite.bindings.gl).useProgram(program);
});
webglite.bindings.uniform2f = (function webglite$bindings$uniform2f(resolution_uniform_location,width,height){
return cljs.core.deref.call(null,webglite.bindings.gl).uniform2f(resolution_uniform_location,width,height);
});
webglite.bindings.draw_arrays = (function webglite$bindings$draw_arrays(primitive_type,offset,count){
return cljs.core.deref.call(null,webglite.bindings.gl).drawArrays(primitive_type,offset,count);
});
webglite.bindings.get_uniform_location = (function webglite$bindings$get_uniform_location(program,attribute){
return cljs.core.deref.call(null,webglite.bindings.gl).getUniformLocation(program,attribute);
});
webglite.bindings.clear_depth = (function webglite$bindings$clear_depth(value){
return cljs.core.deref.call(null,webglite.bindings.gl).clearDepth(value);
});
webglite.bindings.enable = (function webglite$bindings$enable(glenum){
return cljs.core.deref.call(null,webglite.bindings.gl).enable(glenum);
});
webglite.bindings.depth_func = (function webglite$bindings$depth_func(glenum){
return cljs.core.deref.call(null,webglite.bindings.gl).depthFunc(glenum);
});
webglite.bindings.float$ = (function webglite$bindings$float(){
return cljs.core.deref.call(null,webglite.bindings.gl).FLOAT;
});
webglite.bindings.lequal = (function webglite$bindings$lequal(){
return cljs.core.deref.call(null,webglite.bindings.gl).LEQUAL;
});
webglite.bindings.depth_test = (function webglite$bindings$depth_test(){
return cljs.core.deref.call(null,webglite.bindings.gl).DEPTH_TEST;
});
webglite.bindings.depth_buffer_bit = (function webglite$bindings$depth_buffer_bit(){
return cljs.core.deref.call(null,webglite.bindings.gl).DEPTH_BUFFER_BIT;
});
webglite.bindings.array_buffer = (function webglite$bindings$array_buffer(){
return cljs.core.deref.call(null,webglite.bindings.gl).ARRAY_BUFFER;
});
webglite.bindings.vertex_shader = (function webglite$bindings$vertex_shader(){
return cljs.core.deref.call(null,webglite.bindings.gl).VERTEX_SHADER;
});
webglite.bindings.fragment_shader = (function webglite$bindings$fragment_shader(){
return cljs.core.deref.call(null,webglite.bindings.gl).FRAGMENT_SHADER;
});
webglite.bindings.color_buffer_bit = (function webglite$bindings$color_buffer_bit(){
return cljs.core.deref.call(null,webglite.bindings.gl).COLOR_BUFFER_BIT;
});
webglite.bindings.triangles = (function webglite$bindings$triangles(){
return cljs.core.deref.call(null,webglite.bindings.gl).TRIANGLES;
});
webglite.bindings.static_draw = (function webglite$bindings$static_draw(){
return cljs.core.deref.call(null,webglite.bindings.gl).STATIC_DRAW;
});
webglite.bindings.dynamic_draw = (function webglite$bindings$dynamic_draw(){
return cljs.core.deref.call(null,webglite.bindings.gl).DYNAMIC_DRAW;
});
webglite.bindings.stream_draw = (function webglite$bindings$stream_draw(){
return cljs.core.deref.call(null,webglite.bindings.gl).STREAM_DRAW;
});
webglite.bindings.static_read = (function webglite$bindings$static_read(){
return cljs.core.deref.call(null,webglite.bindings.gl).STATIC_READ;
});
webglite.bindings.stream_read = (function webglite$bindings$stream_read(){
return cljs.core.deref.call(null,webglite.bindings.gl).STREAM_READ;
});
webglite.bindings.static_copy = (function webglite$bindings$static_copy(){
return cljs.core.deref.call(null,webglite.bindings.gl).STATIC_COPY;
});
webglite.bindings.dynamic_copy = (function webglite$bindings$dynamic_copy(){
return cljs.core.deref.call(null,webglite.bindings.gl).DYNAMIC_COPY;
});
webglite.bindings.stream_copy = (function webglite$bindings$stream_copy(){
return cljs.core.deref.call(null,webglite.bindings.gl).STREAM_COPY;
});
webglite.bindings.link_status = (function webglite$bindings$link_status(){
return cljs.core.deref.call(null,webglite.bindings.gl).LINK_STATUS;
});
webglite.bindings.compile_status = (function webglite$bindings$compile_status(){
return cljs.core.deref.call(null,webglite.bindings.gl).COMPILE_STATUS;
});

//# sourceMappingURL=bindings.js.map
