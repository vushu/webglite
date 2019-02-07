// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webglite.examples.twod');
goog.require('cljs.core');
goog.require('cljsjs.gl_matrix');
goog.require('webglite.bindings');
goog.require('webglite.canvas');
goog.require('webglite.constants');
goog.require('webglite.glsh_helper');
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.mycanvas !== 'undefined')){
} else {
webglite.examples.twod.mycanvas = webglite.bindings.create_canvas.call(null,(400),(400));
}
webglite.examples.twod.ctx = webglite.bindings.get_context.call(null,webglite.examples.twod.mycanvas,"webgl2");
webglite.examples.twod.vertex_shader_source = ["#version 300 es\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.in_vec4.call(null,"a_position")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.main.call(null,webglite.glsh_helper.assign.call(null,"gl_Position","a_position")))].join('');
webglite.examples.twod.fragment_shader_source = ["#version 300 es\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.pre_medp_float),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.out_vec4.call(null,"outColor")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.main.call(null,webglite.glsh_helper.assign.call(null,"outColor",webglite.glsh_helper.vec4.call(null,(1),(0),0.5,(1)))))].join('');
cljs.core.println.call(null,webglite.examples.twod.fragment_shader_source);
cljs.core.println.call(null,webglite.examples.twod.vertex_shader_source);
webglite.examples.twod.create_shader = (function webglite$examples$twod$create_shader(ctx,enum$,source){
var shader = webglite.bindings.create_shader.call(null,ctx,enum$);
webglite.bindings.shader_source.call(null,ctx,shader,source);

webglite.bindings.compile_shader.call(null,ctx,shader);

if(cljs.core.not.call(null,webglite.bindings.get_shader_parameter.call(null,ctx,shader,webglite.constants.COMPILE_STATUS))){
alert(["couldn't compile shader ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.bindings.get_shader_info_log.call(null,ctx,shader))].join(''));

webglite.bindings.delete_shader.call(null,ctx,shader);

return null;
} else {
return shader;
}
});
webglite.examples.twod.create_program = (function webglite$examples$twod$create_program(ctx,v,f){
var program = webglite.bindings.create_program.call(null,ctx);
webglite.bindings.attach_shader.call(null,ctx,program,v);

webglite.bindings.attach_shader.call(null,ctx,program,f);

webglite.bindings.link_program.call(null,ctx,program);

var success = webglite.bindings.get_program_parameter.call(null,ctx,program,webglite.constants.LINK_STATUS);
if(cljs.core.truth_(success)){
return program;
} else {
return webglite.bindings.delete_program.call(null,ctx,program);
}
});
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.vertex_shader !== 'undefined')){
} else {
webglite.examples.twod.vertex_shader = webglite.examples.twod.create_shader.call(null,webglite.examples.twod.ctx,webglite.constants.VERTEX_SHADER,webglite.examples.twod.vertex_shader_source);
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.fragment_shader !== 'undefined')){
} else {
webglite.examples.twod.fragment_shader = webglite.examples.twod.create_shader.call(null,webglite.examples.twod.ctx,webglite.constants.FRAGMENT_SHADER,webglite.examples.twod.fragment_shader_source);
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.program !== 'undefined')){
} else {
webglite.examples.twod.program = webglite.examples.twod.create_program.call(null,webglite.examples.twod.ctx,webglite.examples.twod.vertex_shader,webglite.examples.twod.fragment_shader);
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.position_attribute_location !== 'undefined')){
} else {
webglite.examples.twod.position_attribute_location = webglite.bindings.get_attrib_location.call(null,webglite.examples.twod.ctx,webglite.examples.twod.program,"a_position");
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.position_buffer !== 'undefined')){
} else {
webglite.examples.twod.position_buffer = webglite.bindings.create_buffer.call(null,webglite.examples.twod.ctx);
}
webglite.bindings.bind_buffer.call(null,webglite.examples.twod.ctx,webglite.constants.ARRAY_BUFFER,webglite.examples.twod.position_buffer);
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.positions !== 'undefined')){
} else {
webglite.examples.twod.positions = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),0.5,0.7,(0)], null);
}
webglite.bindings.buffer_data.call(null,webglite.examples.twod.ctx,webglite.constants.ARRAY_BUFFER,(new Float32Array(webglite.examples.twod.positions)),webglite.constants.STATIC_DRAW);
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.vao !== 'undefined')){
} else {
webglite.examples.twod.vao = webglite.bindings.create_vertex_array.call(null,webglite.examples.twod.ctx);
}
webglite.bindings.bind_vertex_array.call(null,webglite.examples.twod.ctx,webglite.examples.twod.vao);
webglite.bindings.enable_vertex_attrib_array.call(null,webglite.examples.twod.ctx,webglite.examples.twod.position_attribute_location);
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.size !== 'undefined')){
} else {
webglite.examples.twod.size = (2);
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.normalize !== 'undefined')){
} else {
webglite.examples.twod.normalize = false;
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.stride !== 'undefined')){
} else {
webglite.examples.twod.stride = (0);
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.offset !== 'undefined')){
} else {
webglite.examples.twod.offset = (0);
}
webglite.bindings.vertex_attrib_pointer.call(null,webglite.examples.twod.ctx,webglite.examples.twod.position_attribute_location,webglite.examples.twod.size,webglite.constants.FLOAT,webglite.examples.twod.normalize,webglite.examples.twod.stride,webglite.examples.twod.offset);
webglite.bindings.viewport.call(null,webglite.examples.twod.ctx,(0),(0),(400),(400));
webglite.bindings.clear.call(null,webglite.examples.twod.ctx,webglite.constants.COLOR_BUFFER_BIT);
webglite.bindings.use_program.call(null,webglite.examples.twod.ctx,webglite.examples.twod.program);
webglite.bindings.bind_vertex_array.call(null,webglite.examples.twod.ctx,webglite.examples.twod.vao);
webglite.bindings.draw_arrays.call(null,webglite.examples.twod.ctx,webglite.constants.TRIANGLES,(0),(3));
webglite.examples.twod.run = (function webglite$examples$twod$run(){
if(cljs.core.truth_(webglite.bindings.not_nil.call(null,webglite.examples.twod.ctx))){
return cljs.core.println.call(null,"webgl on");
} else {
return cljs.core.println.call(null,"not on");
}
});

//# sourceMappingURL=twod.js.map
