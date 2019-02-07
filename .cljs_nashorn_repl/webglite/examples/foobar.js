// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webglite.examples.foobar');
goog.require('cljs.core');
goog.require('cljsjs.gl_matrix');
goog.require('webglite.bindings');
goog.require('webglite.constants');
goog.require('webglite.glsh_helper');
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.foobar !== 'undefined') && (typeof webglite.examples.foobar.mycanvas !== 'undefined')){
} else {
webglite.examples.foobar.mycanvas = webglite.bindings.create_canvas.call(null,(400),(400));
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.foobar !== 'undefined') && (typeof webglite.examples.foobar.ctx !== 'undefined')){
} else {
webglite.examples.foobar.ctx = webglite.bindings.get_context.call(null,webglite.examples.foobar.mycanvas,"webgl2");
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.foobar !== 'undefined') && (typeof webglite.examples.foobar.vs_source !== 'undefined')){
} else {
webglite.examples.foobar.vs_source = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.att_vec4.call(null,"aVertexPosition")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.uni_mat4.call(null,"uModelViewMatrix")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.uni_mat4.call(null,"uProjectionMatrix")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.main.call(null,webglite.glsh_helper.assign.call(null,"gl_Position",webglite.glsh_helper.mul.call(null,"uProjectionMatrix","uModelViewMatrix","aVertexPosition"))))].join('');
}
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.foobar !== 'undefined') && (typeof webglite.examples.foobar.fs_source !== 'undefined')){
} else {
webglite.examples.foobar.fs_source = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.main.call(null,webglite.glsh_helper.assign.call(null,"gl_FragColor",webglite.glsh_helper.vec4.call(null,1.0,1.0,1.0,1.0))))].join('');
}
webglite.examples.foobar.compile_shader = (function webglite$examples$foobar$compile_shader(type,source){
var shader = webglite.bindings.create_shader.call(null,webglite.examples.foobar.ctx,type);
webglite.bindings.shader_source.call(null,webglite.examples.foobar.ctx,shader,source);

webglite.bindings.compile_shader.call(null,webglite.examples.foobar.ctx,shader);

if(cljs.core.not.call(null,webglite.bindings.get_shader_parameter.call(null,webglite.examples.foobar.ctx,shader,webglite.constants.COMPILE_STATUS))){
alert(["couldn't compile shader ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.bindings.get_shader_info_log.call(null,webglite.examples.foobar.ctx,shader))].join(''));

webglite.bindings.delete_shader.call(null,webglite.examples.foobar.ctx,shader);

return null;
} else {
return shader;
}
});
webglite.examples.foobar.init_shader_program = (function webglite$examples$foobar$init_shader_program(vs_source,fs_source){
var vertex_shader = webglite.examples.foobar.compile_shader.call(null,webglite.constants.VERTEX_SHADER,vs_source);
var fragment_shader = webglite.examples.foobar.compile_shader.call(null,webglite.constants.FRAGMENT_SHADER,fs_source);
var shader_program = webglite.bindings.create_program.call(null,webglite.examples.foobar.ctx);
webglite.bindings.attach_shader.call(null,webglite.examples.foobar.ctx,shader_program,vertex_shader);

webglite.bindings.attach_shader.call(null,webglite.examples.foobar.ctx,shader_program,fragment_shader);

webglite.bindings.link_program.call(null,webglite.examples.foobar.ctx,shader_program);

if(cljs.core.not.call(null,webglite.bindings.get_program_parameter.call(null,webglite.examples.foobar.ctx,shader_program,webglite.constants.LINK_STATUS))){
alert(["couldn't init program ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.bindings.get_program_info_log.call(null,webglite.examples.foobar.ctx,shader_program))].join(''));

return null;
} else {
return shader_program;
}
});
webglite.examples.foobar.program = webglite.examples.foobar.init_shader_program.call(null,webglite.examples.foobar.vs_source,webglite.examples.foobar.fs_source);
webglite.examples.foobar.attrib_locations = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertex-position","vertex-position",1294563603),webglite.bindings.get_attrib_location.call(null,webglite.examples.foobar.ctx,webglite.examples.foobar.program,"aVertexPosition")], null);
webglite.examples.foobar.uniform_locations = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projection-matrix","projection-matrix",-1536407478),webglite.bindings.get_uniform_location.call(null,webglite.examples.foobar.ctx,webglite.examples.foobar.program,"uProjectionMatrix"),new cljs.core.Keyword(null,"model-view-matrix","model-view-matrix",1037498835),webglite.bindings.get_uniform_location.call(null,webglite.examples.foobar.ctx,webglite.examples.foobar.program,"uModelViewMatrix")], null);
webglite.examples.foobar.position = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.0,1.0,1.0,1.0,-1.0,-1.0,1.0,-1.0], null);
webglite.examples.foobar.draw_scene = (function webglite$examples$foobar$draw_scene(){
webglite.bindings.clear_color.call(null,webglite.examples.foobar.ctx,0.0,0.0,0.0,1.0);

webglite.bindings.clear_depth.call(null,webglite.examples.foobar.ctx,1.0);

webglite.bindings.enable.call(null,webglite.examples.foobar.ctx,webglite.constants.DEPTH_TEST);

webglite.bindings.depth_func.call(null,webglite.examples.foobar.ctx,webglite.constants.LEQUAL);

webglite.bindings.clear.call(null,webglite.examples.foobar.ctx,(function (){var or__3949__auto__ = webglite.constants.COLOR_BUFFER_BIT;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return webglite.constants.DEPTH_BUFFER_BIT;
}
})());

return cljs.core.println.call(null,mat4.create());
});
webglite.examples.foobar.init_game = (function webglite$examples$foobar$init_game(){
webglite.examples.foobar.draw_scene.call(null);

if(cljs.core.truth_(webglite.bindings.not_nil.call(null,webglite.examples.foobar.ctx))){
cljs.core.println.call(null,"webgl is on");
} else {
cljs.core.println.call(null,"no webgl!");
}

webglite.bindings.clear_color.call(null,webglite.examples.foobar.ctx,0.2,0.5,(1),(1));

return webglite.bindings.clear.call(null,webglite.examples.foobar.ctx,webglite.constants.COLOR_BUFFER_BIT);
});

//# sourceMappingURL=foobar.js.map
