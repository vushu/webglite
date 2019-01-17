// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webglite.examples.tetris');
goog.require('cljs.core');
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
webglite.examples.tetris.init_game = (function webglite$examples$tetris$init_game(){
if(cljs.core.truth_(webglite.bindings.not_nil.call(null))){
cljs.core.println.call(null,"webgl is on");
} else {
cljs.core.println.call(null,"no webgl!");
}

cljs.core.println.call(null,webglite.examples.tetris.vs_source);

cljs.core.println.call(null,webglite.examples.tetris.fs_source);

webglite.bindings.clear_color.call(null,0.2,0.5,(1),(1));

return webglite.bindings.clear.call(null,webglite.bindings.color_buffer_bit.call(null));
});

//# sourceMappingURL=tetris.js.map
