// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('rewrite_clj.zip.utils');
goog.require('cljs.core');
goog.require('clojure.zip');
rewrite_clj.zip.utils.update_in_path = (function rewrite_clj$zip$utils$update_in_path(p__21105,k,f){
var vec__21106 = p__21105;
var node = cljs.core.nth.call(null,vec__21106,(0),null);
var path = cljs.core.nth.call(null,vec__21106,(1),null);
var loc = vec__21106;
var v = cljs.core.get.call(null,path,k);
if(cljs.core.seq.call(null,v)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,k,f.call(null,v),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_right = (function rewrite_clj$zip$utils$remove_right(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_left = (function rewrite_clj$zip$utils$remove_left(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
});
rewrite_clj.zip.utils.remove_while = (function rewrite_clj$zip$utils$remove_while(zloc,p_QMARK_){

var zloc__$1 = zloc;
while(true){
var ploc = clojure.zip.prev.call(null,zloc__$1);
if(cljs.core.not.call(null,(function (){var and__3938__auto__ = ploc;
if(cljs.core.truth_(and__3938__auto__)){
return p_QMARK_.call(null,ploc);
} else {
return and__3938__auto__;
}
})())){
return zloc__$1;
} else {
var G__21109 = clojure.zip.remove.call(null,zloc__$1);
zloc__$1 = G__21109;
continue;
}
break;
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_right_while = (function rewrite_clj$zip$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5455__auto__ = clojure.zip.right.call(null,zloc__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var rloc = temp__5455__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,rloc))){
var G__21110 = rewrite_clj.zip.utils.remove_right.call(null,zloc__$1);
zloc__$1 = G__21110;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_left_while = (function rewrite_clj$zip$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5455__auto__ = clojure.zip.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var lloc = temp__5455__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,lloc))){
var G__21111 = rewrite_clj.zip.utils.remove_left.call(null,zloc__$1);
zloc__$1 = G__21111;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_left = (function rewrite_clj$zip$utils$remove_and_move_left(p__21112){
var vec__21113 = p__21112;
var _ = cljs.core.nth.call(null,vec__21113,(0),null);
var map__21116 = cljs.core.nth.call(null,vec__21113,(1),null);
var map__21116__$1 = ((((!((map__21116 == null)))?(((((map__21116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21116):map__21116);
var path = map__21116__$1;
var l = cljs.core.get.call(null,map__21116__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var loc = vec__21113;
if(cljs.core.seq.call(null,l)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_right = (function rewrite_clj$zip$utils$remove_and_move_right(p__21118){
var vec__21119 = p__21118;
var _ = cljs.core.nth.call(null,vec__21119,(0),null);
var map__21122 = cljs.core.nth.call(null,vec__21119,(1),null);
var map__21122__$1 = ((((!((map__21122 == null)))?(((((map__21122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21122):map__21122);
var path = map__21122__$1;
var r = cljs.core.get.call(null,map__21122__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var loc = vec__21119;
if(cljs.core.seq.call(null,r)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,r),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
rewrite_clj.zip.utils.remove_and_move_up = (function rewrite_clj$zip$utils$remove_and_move_up(loc){
var vec__21124 = loc;
var node = cljs.core.nth.call(null,vec__21124,(0),null);
var map__21127 = cljs.core.nth.call(null,vec__21124,(1),null);
var map__21127__$1 = ((((!((map__21127 == null)))?(((((map__21127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21127):map__21127);
var path = map__21127__$1;
var l = cljs.core.get.call(null,map__21127__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__21127__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__21127__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__21127__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw (new Error("Remove at top"));
} else {
if((cljs.core.count.call(null,l) > (0))){
return clojure.zip.up.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc)));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__3938__auto__ = ppath;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__3938__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});

//# sourceMappingURL=utils.js.map
