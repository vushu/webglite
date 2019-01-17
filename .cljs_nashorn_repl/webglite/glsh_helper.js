// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webglite.glsh_helper');
goog.require('cljs.core');
webglite.glsh_helper.att_vec4 = (function webglite$glsh_helper$att_vec4(name){
return ["attribute vec4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),";"].join('');
});
webglite.glsh_helper.vec4 = (function webglite$glsh_helper$vec4(x,y,z,v){
return ["vec4(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(z),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),")"].join('');
});
webglite.glsh_helper.uni_mat4 = (function webglite$glsh_helper$uni_mat4(name){
return ["uniform mat4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),";"].join('');
});
webglite.glsh_helper.mul = (function webglite$glsh_helper$mul(var_args){
var args__4534__auto__ = [];
var len__4531__auto___7493 = arguments.length;
var i__4532__auto___7494 = (0);
while(true){
if((i__4532__auto___7494 < len__4531__auto___7493)){
args__4534__auto__.push((arguments[i__4532__auto___7494]));

var G__7495 = (i__4532__auto___7494 + (1));
i__4532__auto___7494 = G__7495;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return webglite.glsh_helper.mul.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

webglite.glsh_helper.mul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.subs.call(null,clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__7491_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7491_SHARP_)].join('');
}),args)),(2));
});

webglite.glsh_helper.mul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
webglite.glsh_helper.mul.cljs$lang$applyTo = (function (seq7492){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7492));
});

webglite.glsh_helper.assign = (function webglite$glsh_helper$assign(name,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),";"].join('');
});
webglite.glsh_helper.main = (function webglite$glsh_helper$main(code){
return ["void main() {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"}"].join('');
});

//# sourceMappingURL=glsh_helper.js.map
