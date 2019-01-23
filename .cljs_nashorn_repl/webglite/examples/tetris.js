// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webglite.examples.tetris');
goog.require('cljs.core');
goog.require('cljsjs.gl_matrix');
goog.require('webglite.bindings');
goog.require('webglite.glsh_helper');
webglite.examples.tetris.mycanvas = (function webglite$examples$tetris$mycanvas(){
return webglite.bindings.create_canvas.call(null,(400),(400));
});
webglite.bindings.get_context.call(null,webglite.examples.tetris.mycanvas.call(null),"webgl2");
webglite.examples.tetris.vs_source = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.att_vec4.call(null,"aVertexPosition")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.uni_mat4.call(null,"uModelViewMatrix")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.uni_mat4.call(null,"uProjectionMatrix")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.main.call(null,webglite.glsh_helper.assign.call(null,"gl_Position",webglite.glsh_helper.mul.call(null,"uProjectionMatrix","uModelViewMatrix","aVertexPosition"))))].join('');
webglite.examples.tetris.fs_source = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.glsh_helper.main.call(null,webglite.glsh_helper.assign.call(null,"gl_FragColor",webglite.glsh_helper.vec4.call(null,1.0,1.0,1.0,1.0))))].join('');
webglite.examples.tetris.compile_shader = (function webglite$examples$tetris$compile_shader(type,source){
var shader = webglite.bindings.create_shader.call(null,type);
webglite.bindings.shader_source.call(null,shader,source);

webglite.bindings.compile_shader.call(null,shader);

if(cljs.core.not.call(null,webglite.bindings.get_shader_parameter.call(null,shader,webglite.bindings.compile_status.call(null)))){
alert(["couldn't compile shader ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.bindings.get_shader_info_log.call(null,shader))].join(''));

webglite.bindings.delete_shader.call(null,shader);

return null;
} else {
return shader;
}
});
webglite.examples.tetris.init_shader_program = (function webglite$examples$tetris$init_shader_program(){
var vertex_shader = webglite.examples.tetris.compile_shader.call(null,webglite.bindings.vertex_shader.call(null),webglite.examples.tetris.vs_source);
var fragment_shader = webglite.examples.tetris.compile_shader.call(null,webglite.bindings.fragment_shader.call(null),webglite.examples.tetris.fs_source);
var shader_program = webglite.bindings.create_program.call(null);
webglite.bindings.attach_shader.call(null,shader_program,vertex_shader);

webglite.bindings.attach_shader.call(null,shader_program,fragment_shader);

webglite.bindings.link_program.call(null,shader_program);

if(cljs.core.not.call(null,webglite.bindings.get_program_parameter.call(null,shader_program,webglite.bindings.link_status.call(null)))){
alert(["couldn't init program ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(webglite.bindings.get_program_info_log.call(null,shader_program))].join(''));

return null;
} else {
return shader_program;
}
});
webglite.examples.tetris.program = webglite.examples.tetris.init_shader_program.call(null);
webglite.examples.tetris.attrib_locations = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertex-position","vertex-position",1294563603),webglite.bindings.get_attrib_location.call(null,webglite.examples.tetris.program,"aVertexPosition")], null);
webglite.examples.tetris.uniform_locations = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"projection-matrix","projection-matrix",-1536407478),webglite.bindings.get_uniform_location.call(null,webglite.examples.tetris.program,"uProjectionMatrix"),new cljs.core.Keyword(null,"model-view-matrix","model-view-matrix",1037498835),webglite.bindings.get_uniform_location.call(null,webglite.examples.tetris.program,"uModelViewMatrix")], null);
webglite.examples.tetris.position = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.0,1.0,1.0,1.0,-1.0,-1.0,1.0,-1.0], null);
webglite.examples.tetris.draw_scene = (function webglite$examples$tetris$draw_scene(){
webglite.bindings.clear_color.call(null,0.0,0.0,0.0,1.0);

webglite.bindings.clear_depth.call(null,1.0);

webglite.bindings.enable.call(null,webglite.bindings.depth_test.call(null));

webglite.bindings.depth_func.call(null,webglite.bindings.lequal.call(null));

webglite.bindings.clear.call(null,(function (){var or__3949__auto__ = webglite.bindings.color_buffer_bit.call(null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return webglite.bindings.depth_buffer_bit.call(null);
}
})());

cljs.core.println.call(null,"here");

cljs.core.println.call(null,mat4.create());

return cljs.core.println.call(null,"end");
});
webglite.examples.tetris.init_game = (function webglite$examples$tetris$init_game(){
webglite.examples.tetris.draw_scene.call(null);

if(cljs.core.truth_(webglite.bindings.not_nil.call(null))){
cljs.core.println.call(null,"webgl is on");
} else {
cljs.core.println.call(null,"no webgl!");
}

cljs.core.println.call(null,webglite.examples.tetris.vs_source);

return cljs.core.println.call(null,webglite.examples.tetris.fs_source);
});

//# sourceMappingURL=tetris.js.map
