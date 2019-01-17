// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webgl_mini.tetris');
goog.require('cljs.core');
goog.require('webgl_mini.bindings');
webgl_mini.tetris.canvas = webgl_mini.tetris.create_canvas.call(null,(500),(500));
webgl_mini.tetris.gl = webgl_mini.tetris.get_context.call(null,webgl_mini.tetris.canvas,"webgl2");
alert("med dig");
webgl_mini.tetris.init_game = (function webgl_mini$tetris$init_game(){

return cljs.core.println.call(null,"running tetris");
});

//# sourceMappingURL=tetris.js.map
