// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webgl_mini.examples.tetris');
goog.require('cljs.core');
goog.require('webgl_mini.bindings');
goog.require('webgl_mini.glsh_helper');
webgl_mini.examples.tetris.mycanvas = (function webgl_mini$examples$tetris$mycanvas(){
return webgl_mini.bindings.create_canvas.call(null,(400),(400));
});
webgl_mini.bindings.get_context.call(null,webgl_mini.examples.tetris.mycanvas.call(null),"webgl2");
webgl_mini.examples.tetris.vs_source = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(webgl_mini.glsh_helper.att_vec4.call(null,"aVertexPosition")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webgl_mini.glsh_helper.uni_mat4.call(null,"uModelViewMatrix")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webgl_mini.glsh_helper.uni_mat4.call(null,"uProjectionMatrix")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(webgl_mini.glsh_helper.main.call(null,webgl_mini.glsh_helper.assign.call(null,"gl_Position",webgl_mini.glsh_helper.mul.call(null,"uProjectionMatrix","uModelViewMatrix","aVertexPosition"))))].join('');
webgl_mini.examples.tetris.init_game = (function webgl_mini$examples$tetris$init_game(){
if(cljs.core.truth_(webgl_mini.bindings.not_nil.call(null))){
cljs.core.println.call(null,"webgl is on");
} else {
cljs.core.println.call(null,"no webgl!");
}

cljs.core.println.call(null,webgl_mini.examples.tetris.vs_source);

webgl_mini.bindings.clear_color.call(null,0.2,0.5,(1),(1));

return webgl_mini.bindings.clear.call(null,webgl_mini.bindings.color_buffer_bit.call(null));
});

//# sourceMappingURL=tetris.js.map
