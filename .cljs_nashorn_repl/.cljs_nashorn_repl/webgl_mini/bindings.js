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
webgl_mini.bindings.context = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gl","gl",-246422634),null], null));
/**
 * type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
 */
webgl_mini.bindings.create_shader = (function webgl_mini$bindings$create_shader(gl,type){
return gl.createShader(type);
});
webgl_mini.bindings.clear_color = (function webgl_mini$bindings$clear_color(r,g,b,a){
webgl_mini.bindings.clear_color.call(null,cljs.core.deref.call(null,webgl_mini.bindings.context).call(null,new cljs.core.Keyword(null,"gl","gl",-246422634)));




return a;
});
