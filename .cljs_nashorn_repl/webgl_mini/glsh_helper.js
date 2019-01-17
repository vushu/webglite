// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('webgl_mini.glsh_helper');
goog.require('cljs.core');
webgl_mini.glsh_helper.att_vec4 = (function webgl_mini$glsh_helper$att_vec4(name){
return ["attribute vec4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),";"].join('');
});
webgl_mini.glsh_helper.uni_mat4 = (function webgl_mini$glsh_helper$uni_mat4(name){
return ["uniform mat4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),";"].join('');
});
webgl_mini.glsh_helper.mul = (function webgl_mini$glsh_helper$mul(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15951 = arguments.length;
var i__4532__auto___15954 = (0);
while(true){
if((i__4532__auto___15954 < len__4531__auto___15951)){
args__4534__auto__.push((arguments[i__4532__auto___15954]));

var G__15955 = (i__4532__auto___15954 + (1));
i__4532__auto___15954 = G__15955;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return webgl_mini.glsh_helper.mul.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

webgl_mini.glsh_helper.mul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.subs.call(null,clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__15949_SHARP_){
return [" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15949_SHARP_)].join('');
}),args)),(2));
});

webgl_mini.glsh_helper.mul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
webgl_mini.glsh_helper.mul.cljs$lang$applyTo = (function (seq15950){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15950));
});

webgl_mini.glsh_helper.assign = (function webgl_mini$glsh_helper$assign(name,value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),";"].join('');
});
webgl_mini.glsh_helper.main = (function webgl_mini$glsh_helper$main(code){
return ["void main() {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"}"].join('');
});

//# sourceMappingURL=glsh_helper.js.map
