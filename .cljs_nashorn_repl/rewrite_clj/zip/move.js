// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('rewrite_clj.zip.move');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Move right to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__21094 = zloc;
var G__21094__$1 = (((G__21094 == null))?null:clojure.zip.right.call(null,G__21094));
if((G__21094__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__21094__$1);
}
});
/**
 * Move left to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__21095 = zloc;
var G__21095__$1 = (((G__21095 == null))?null:clojure.zip.left.call(null,G__21095));
if((G__21095__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__21095__$1);
}
});
/**
 * Move down to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__21096 = zloc;
var G__21096__$1 = (((G__21096 == null))?null:clojure.zip.down.call(null,G__21096));
if((G__21096__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__21096__$1);
}
});
/**
 * Move up to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__21097 = zloc;
var G__21097__$1 = (((G__21097 == null))?null:clojure.zip.up.call(null,G__21097));
if((G__21097__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__21097__$1);
}
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__3949__auto__ = (function (){var G__21099 = zloc;
var G__21099__$1 = (((G__21099 == null))?null:clojure.zip.next.call(null,G__21099));
if((G__21099__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.next,G__21099__$1);
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.vary_meta.call(null,zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475),true);
}
} else {
return null;
}
});
/**
 * Check whether the given node is at the end of the depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__3949__auto__ = cljs.core.not.call(null,zloc);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = clojure.zip.end_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,zloc));
}
}
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.right.call(null,zloc)) == null);
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,clojure.zip.left.call(null,zloc)) == null);
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__21100 = zloc;
var G__21100__$1 = (((G__21100 == null))?null:clojure.zip.prev.call(null,G__21100));
if((G__21100__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.prev,G__21100__$1);
}
});
/**
 * Move to the leftmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__21101 = zloc;
var G__21101__$1 = (((G__21101 == null))?null:clojure.zip.leftmost.call(null,G__21101));
if((G__21101__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__21101__$1);
}
});
/**
 * Move to the rightmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__21102 = zloc;
var G__21102__$1 = (((G__21102 == null))?null:clojure.zip.rightmost.call(null,G__21102));
if((G__21102__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__21102__$1);
}
});

//# sourceMappingURL=move.js.map
