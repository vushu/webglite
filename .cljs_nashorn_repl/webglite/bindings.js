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
webglite.bindings.get_context = (function webglite$bindings$get_context(canvas,gltype){
return canvas.getContext(gltype);
});
webglite.bindings.not_nil = (function webglite$bindings$not_nil(gl){
return !((gl == null));
});
/**
 * type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
 */
webglite.bindings.create_shader = (function webglite$bindings$create_shader(gl,type){
return gl.createShader(type);
});
webglite.bindings.clear_color = (function webglite$bindings$clear_color(gl,r,g,b,a){
return gl.clearColor(r,g,b,a);
});
webglite.bindings.clear = (function webglite$bindings$clear(gl,glenum){
return gl.clear(glenum);
});
webglite.bindings.viewport = (function webglite$bindings$viewport(gl,x,y,width,height){
return gl.viewport(x,y,width,height);
});
/**
 * shader A WebGLShader object in which to set the source code.
 * source DOMString containing the GLSL source code to set.
 */
webglite.bindings.shader_source = (function webglite$bindings$shader_source(gl,source,code){
return gl.shaderSource(source,code);
});
/**
 * shader A fragment or vertex WebGLShader.
 */
webglite.bindings.compile_shader = (function webglite$bindings$compile_shader(gl,shader){
return gl.compileShader(shader);
});
/**
 * Return the info log of the shader
 */
webglite.bindings.get_shader_info_log = (function webglite$bindings$get_shader_info_log(gl,shader){
return gl.getShaderInfoLog(shader);
});
webglite.bindings.get_program_info_log = (function webglite$bindings$get_program_info_log(gl,program){
return gl.getProgramInfoLog(program);
});
webglite.bindings.get_program_parameter = (function webglite$bindings$get_program_parameter(gl,program,glenum){
return gl.getProgramParameter(program,glenum);
});
webglite.bindings.get_shader_parameter = (function webglite$bindings$get_shader_parameter(gl,shader,glenum){
return gl.getShaderParameter(shader,glenum);
});
/**
 * does as it says
 */
webglite.bindings.delete_shader = (function webglite$bindings$delete_shader(gl,shader){
return gl.deleteShader(shader);
});
webglite.bindings.create_program = (function webglite$bindings$create_program(gl){
return gl.createProgram();
});
webglite.bindings.attach_shader = (function webglite$bindings$attach_shader(gl,program,shader){
return gl.attachShader(program,shader);
});
webglite.bindings.link_program = (function webglite$bindings$link_program(gl,program){
return gl.linkProgram(program);
});
webglite.bindings.delete_program = (function webglite$bindings$delete_program(gl,program){
return gl.deleteProgram(program);
});
webglite.bindings.get_attrib_location = (function webglite$bindings$get_attrib_location(gl,program,attribute){
return gl.getAttribLocation(program,attribute);
});
webglite.bindings.uniform4fv = (function webglite$bindings$uniform4fv(gl,attribute,rgba){
return gl.uniform4fv(attribute,rgba);
});
webglite.bindings.create_buffer = (function webglite$bindings$create_buffer(gl){
return gl.createBuffer();
});
webglite.bindings.bind_buffer = (function webglite$bindings$bind_buffer(gl,array_buffer,position_buffer){
return gl.bindBuffer(array_buffer,position_buffer);
});
/**
 * example in javascript:
 * gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
 */
webglite.bindings.buffer_data = (function webglite$bindings$buffer_data(gl,array_buffer,positions,gl_enum){
return gl.bufferData(array_buffer,positions,gl_enum);
});
webglite.bindings.create_vertex_array = (function webglite$bindings$create_vertex_array(gl){
return gl.createVertexArray();
});
webglite.bindings.bind_vertex_array = (function webglite$bindings$bind_vertex_array(gl,vertex_array){
return gl.bindVertexArray(vertex_array);
});
webglite.bindings.enable_vertex_attrib_array = (function webglite$bindings$enable_vertex_attrib_array(gl,position_attribute_location){
return gl.enableVertexAttribArray(position_attribute_location);
});
webglite.bindings.vertex_attrib_pointer = (function webglite$bindings$vertex_attrib_pointer(gl,attribute_location,size,type,normalize,stride,offset){
return gl.vertexAttribPointer(attribute_location,size,type,normalize,stride,offset);
});
webglite.bindings.use_program = (function webglite$bindings$use_program(gl,program){
return gl.useProgram(program);
});
webglite.bindings.uniform2f = (function webglite$bindings$uniform2f(gl,resolution_uniform_location,width,height){
return gl.uniform2f(resolution_uniform_location,width,height);
});
webglite.bindings.draw_arrays = (function webglite$bindings$draw_arrays(gl,primitive_type,offset,count){
return gl.drawArrays(primitive_type,offset,count);
});
webglite.bindings.get_uniform_location = (function webglite$bindings$get_uniform_location(gl,program,attribute){
return gl.getUniformLocation(program,attribute);
});
webglite.bindings.clear_depth = (function webglite$bindings$clear_depth(gl,value){
return gl.clearDepth(value);
});
webglite.bindings.enable = (function webglite$bindings$enable(gl,glenum){
return gl.enable(glenum);
});
webglite.bindings.depth_func = (function webglite$bindings$depth_func(gl,glenum){
return gl.depthFunc(glenum);
});

//# sourceMappingURL=bindings.js.map
