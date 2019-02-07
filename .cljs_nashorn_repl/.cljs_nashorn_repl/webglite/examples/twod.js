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
if((typeof webglite !== 'undefined') && (typeof webglite.examples !== 'undefined') && (typeof webglite.examples.twod !== 'undefined') && (typeof webglite.examples.twod.ctx !== 'undefined')){
} else {
webglite.examples.twod.ctx = webglite.bindings.get_context.call(null,webglite.examples.twod.mycanvas,"webgl2");
}
webglite.examples.twod.translation = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
webglite.examples.twod.width = (100);
webglite.examples.twod.height = (30);
webglite.examples.twod.color = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(255)),cljs.core.rand_int.call(null,(255)),cljs.core.rand_int.call(null,(255)),(1)], null);
webglite.examples.twod.draw = (function webglite$examples$twod$draw(){
return cljs.core.println.call(null,"width ",webglite.canvas.width.call(null,webglite.examples.twod.ctx));
});
webglite.examples.twod.run = (function webglite$examples$twod$run(){
return webglite.examples.twod.draw.call(null);
});

//# sourceMappingURL=twod.js.map
