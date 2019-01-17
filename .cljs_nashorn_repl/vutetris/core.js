// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('vutetris.core');
goog.require('cljs.core');
vutetris.core.createCanvas = (function vutetris$core$createCanvas(width,height){
var canvas = document.createElement("CANVAS");
var body = cljs.core.get.call(null,document.getElementsByTagName("body"),(0));
canvas.width = width;

canvas.height = height;

canvas.style.zIndex = (8);

canvas.style.border = "1px solid";

return document.body.appendChild(canvas);
});
vutetris.core.getContext = (function vutetris$core$getContext(canvas){
return canvas.getContext;
});

//# sourceMappingURL=core.js.map
