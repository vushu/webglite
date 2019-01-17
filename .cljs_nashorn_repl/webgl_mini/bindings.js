// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webgl_mini.bindings');
goog.require('cljs.core');
webgl_mini.bindings.create_canvas = (function webgl_mini$bindings$create_canvas(width,height){
var canvas = document.createElement("CANVAS");
var body = cljs.core.get.call(null,document.getElementsByTagName("body"),(0));
canvas.width = width;

canvas.height = height;

canvas.style.zIndex = (8);

canvas.style.border = "1px solid";

return document.body.appendChild(canvas);
});
if((typeof webgl_mini !== 'undefined') && (typeof webgl_mini.bindings !== 'undefined') && (typeof webgl_mini.bindings.context !== 'undefined')){
} else {
webgl_mini.bindings.context = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
webgl_mini.bindings.get_context = (function webgl_mini$bindings$get_context(canvas,gltype){
return cljs.core.swap_BANG_.call(null,webgl_mini.bindings.context,cljs.core.assoc,new cljs.core.Keyword(null,"gl","gl",-246422634),canvas.getContext(gltype));
});
webgl_mini.bindings.not_nil = (function webgl_mini$bindings$not_nil(){
return !((cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)) == null));
});
/**
 * type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
 */
webgl_mini.bindings.create_shader = (function webgl_mini$bindings$create_shader(type){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).createShader(type);
});
webgl_mini.bindings.clear_color = (function webgl_mini$bindings$clear_color(r,g,b,a){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).clearColor(r,g,b,a);
});
webgl_mini.bindings.clear = (function webgl_mini$bindings$clear(glenum){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).clear(glenum);
});
webgl_mini.bindings.viewport = (function webgl_mini$bindings$viewport(x,y,width,height){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).viewport(x,y,width,height);
});
/**
 * shader A WebGLShader object in which to set the source code.
 * source DOMString containing the GLSL source code to set.
 */
webgl_mini.bindings.shader_source = (function webgl_mini$bindings$shader_source(source,code){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).shaderSource(source,code);
});
/**
 * shader A fragment or vertex WebGLShader.
 */
webgl_mini.bindings.compile_shader = (function webgl_mini$bindings$compile_shader(shader){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).compileShader(shader);
});
/**
 * Return the info log of the shader
 */
webgl_mini.bindings.get_shader_info_log = (function webgl_mini$bindings$get_shader_info_log(shader){
return shader.getShaderInfoLog();
});
/**
 * does as it says
 */
webgl_mini.bindings.delete_shader = (function webgl_mini$bindings$delete_shader(shader){
return shader.deleteShader();
});
webgl_mini.bindings.create_program = (function webgl_mini$bindings$create_program(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).createProgram();
});
webgl_mini.bindings.attach_shader = (function webgl_mini$bindings$attach_shader(program,shader){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).attachShader(program,shader);
});
webgl_mini.bindings.link_program = (function webgl_mini$bindings$link_program(program){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).linkProgram(program);
});
webgl_mini.bindings.delete_program = (function webgl_mini$bindings$delete_program(program){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).deleteProgram(program);
});
webgl_mini.bindings.get_attrib_location = (function webgl_mini$bindings$get_attrib_location(program,attribute){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).getAttribLocation(program,attribute);
});
webgl_mini.bindings.uniform4fv = (function webgl_mini$bindings$uniform4fv(attribute,rgba){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).uniform4fv(attribute,rgba);
});
webgl_mini.bindings.create_buffer = (function webgl_mini$bindings$create_buffer(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).createBuffer();
});
webgl_mini.bindings.bind_buffer = (function webgl_mini$bindings$bind_buffer(array_buffer,position_buffer){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).bindBuffer(array_buffer,position_buffer);
});
/**
 * example in javascript:
 * gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
 */
webgl_mini.bindings.buffer_data = (function webgl_mini$bindings$buffer_data(array_buffer,positions,gl_enum){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).bufferData(array_buffer,positions,gl_enum);
});
webgl_mini.bindings.create_vertex_array = (function webgl_mini$bindings$create_vertex_array(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).createVertexArray();
});
webgl_mini.bindings.bind_vertex_array = (function webgl_mini$bindings$bind_vertex_array(vertex_array){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).bindVertexArray(vertex_array);
});
webgl_mini.bindings.enable_vertex_attrib_array = (function webgl_mini$bindings$enable_vertex_attrib_array(position_attribute_location){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).enableVertexAttribArray(position_attribute_location);
});
webgl_mini.bindings.vertex_attrib_pointer = (function webgl_mini$bindings$vertex_attrib_pointer(attribute_location,size,type,normalize,stride,offset){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).vertexAttribPointer(attribute_location,size,type,normalize,stride,offset);
});
webgl_mini.bindings.use_program = (function webgl_mini$bindings$use_program(program){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).useProgram(program);
});
webgl_mini.bindings.uniform2f = (function webgl_mini$bindings$uniform2f(resolution_uniform_location,width,height){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).uniform2f(resolution_uniform_location,width,height);
});
webgl_mini.bindings.uniform2f = (function webgl_mini$bindings$uniform2f(resolution_uniform_location,width,height){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).uniform2f(resolution_uniform_location,width,height);
});
webgl_mini.bindings.draw_arrays = (function webgl_mini$bindings$draw_arrays(primitive_type,offset,count){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).drawArrays(primitive_type,offset,count);
});
webgl_mini.bindings.get_uniform_location = (function webgl_mini$bindings$get_uniform_location(program,attribute){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).getUniformLocation(program,attribute);
});
webgl_mini.bindings.float$ = (function webgl_mini$bindings$float(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).FLOAT;
});
webgl_mini.bindings.array_buffer = (function webgl_mini$bindings$array_buffer(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).ARRAY_BUFFER;
});
webgl_mini.bindings.vertex_shader = (function webgl_mini$bindings$vertex_shader(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).VERTEX_SHADER;
});
webgl_mini.bindings.fragment_shader = (function webgl_mini$bindings$fragment_shader(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).FRAGMENT_SHADER;
});
webgl_mini.bindings.color_buffer_bit = (function webgl_mini$bindings$color_buffer_bit(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).COLOR_BUFFER_BIT;
});
webgl_mini.bindings.triangles = (function webgl_mini$bindings$triangles(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).TRIANGLES;
});
webgl_mini.bindings.static_draw = (function webgl_mini$bindings$static_draw(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).STATIC_DRAW;
});
webgl_mini.bindings.dynamic_draw = (function webgl_mini$bindings$dynamic_draw(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).DYNAMIC_DRAW;
});
webgl_mini.bindings.stream_draw = (function webgl_mini$bindings$stream_draw(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).STREAM_DRAW;
});
webgl_mini.bindings.static_read = (function webgl_mini$bindings$static_read(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).STATIC_READ;
});
webgl_mini.bindings.stream_read = (function webgl_mini$bindings$stream_read(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).STREAM_READ;
});
webgl_mini.bindings.static_copy = (function webgl_mini$bindings$static_copy(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).STATIC_COPY;
});
webgl_mini.bindings.dynamic_copy = (function webgl_mini$bindings$dynamic_copy(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).DYNAMIC_COPY;
});
webgl_mini.bindings.stream_copy = (function webgl_mini$bindings$stream_copy(){
return cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)).STREAM_COPY;
});

//# sourceMappingURL=bindings.js.map
