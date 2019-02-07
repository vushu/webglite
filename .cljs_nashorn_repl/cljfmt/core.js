// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('cljfmt.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.zip');
goog.require('clojure.string');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
cljfmt.core.zwhitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
cljfmt.core.zlinebreak_QMARK_ = rewrite_clj.zip.whitespace.linebreak_QMARK_;
cljfmt.core.includes_QMARK_ = clojure.string.includes_QMARK_;
cljfmt.core.edit_all = (function cljfmt$core$edit_all(zloc,p_QMARK_,f){
var zloc__$1 = (cljs.core.truth_(p_QMARK_.call(null,zloc))?f.call(null,zloc):zloc);
while(true){
var temp__5455__auto__ = rewrite_clj.zip.find_next.call(null,zloc__$1,clojure.zip.next,p_QMARK_);
if(cljs.core.truth_(temp__5455__auto__)){
var zloc__$2 = temp__5455__auto__;
var G__24996 = f.call(null,zloc__$2);
zloc__$1 = G__24996;
continue;
} else {
return zloc__$1;
}
break;
}
});
cljfmt.core.transform = (function cljfmt$core$transform(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25000 = arguments.length;
var i__4532__auto___25001 = (0);
while(true){
if((i__4532__auto___25001 < len__4531__auto___25000)){
args__4534__auto__.push((arguments[i__4532__auto___25001]));

var G__25002 = (i__4532__auto___25001 + (1));
i__4532__auto___25001 = G__25002;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic = (function (form,zf,args){
return rewrite_clj.zip.root.call(null,cljs.core.apply.call(null,zf,rewrite_clj.zip.base.edn.call(null,form),args));
});

cljfmt.core.transform.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljfmt.core.transform.cljs$lang$applyTo = (function (seq24997){
var G__24998 = cljs.core.first.call(null,seq24997);
var seq24997__$1 = cljs.core.next.call(null,seq24997);
var G__24999 = cljs.core.first.call(null,seq24997__$1);
var seq24997__$2 = cljs.core.next.call(null,seq24997__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24998,G__24999,seq24997__$2);
});

cljfmt.core.surrounding_QMARK_ = (function cljfmt$core$surrounding_QMARK_(zloc,p_QMARK_){
var and__3938__auto__ = p_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
return (((clojure.zip.left.call(null,zloc) == null)) || ((rewrite_clj.zip.whitespace.skip.call(null,clojure.zip.right,p_QMARK_,zloc) == null)));
} else {
return and__3938__auto__;
}
});
cljfmt.core.top_QMARK_ = (function cljfmt$core$top_QMARK_(zloc){
var and__3938__auto__ = zloc;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,rewrite_clj.zip.node.call(null,zloc),rewrite_clj.zip.root.call(null,zloc));
} else {
return and__3938__auto__;
}
});
cljfmt.core.surrounding_whitespace_QMARK_ = (function cljfmt$core$surrounding_whitespace_QMARK_(zloc){
var and__3938__auto__ = cljfmt.core.top_QMARK_.call(null,rewrite_clj.zip.up.call(null,zloc));
if(cljs.core.truth_(and__3938__auto__)){
return cljfmt.core.surrounding_QMARK_.call(null,zloc,cljfmt.core.zwhitespace_QMARK_);
} else {
return and__3938__auto__;
}
});
cljfmt.core.remove_surrounding_whitespace = (function cljfmt$core$remove_surrounding_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.surrounding_whitespace_QMARK_,clojure.zip.remove);
});
cljfmt.core.element_QMARK_ = (function cljfmt$core$element_QMARK_(zloc){
var and__3938__auto__ = zloc;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_.call(null,zloc));
} else {
return and__3938__auto__;
}
});
cljfmt.core.reader_macro_QMARK_ = (function cljfmt$core$reader_macro_QMARK_(zloc){
var and__3938__auto__ = zloc;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,rewrite_clj.zip.node.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
} else {
return and__3938__auto__;
}
});
cljfmt.core.missing_whitespace_QMARK_ = (function cljfmt$core$missing_whitespace_QMARK_(zloc){
var and__3938__auto__ = cljfmt.core.element_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = cljs.core.not.call(null,cljfmt.core.reader_macro_QMARK_.call(null,clojure.zip.up.call(null,zloc)));
if(and__3938__auto____$1){
return cljfmt.core.element_QMARK_.call(null,clojure.zip.right.call(null,zloc));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
cljfmt.core.insert_missing_whitespace = (function cljfmt$core$insert_missing_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.missing_whitespace_QMARK_,rewrite_clj.zip.whitespace.append_space);
});
cljfmt.core.whitespace_QMARK_ = (function cljfmt$core$whitespace_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
});
cljfmt.core.comment_QMARK_ = (function cljfmt$core$comment_QMARK_(zloc){
var G__25003 = zloc;
var G__25003__$1 = (((G__25003 == null))?null:rewrite_clj.zip.node.call(null,G__25003));
if((G__25003__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment_QMARK_.call(null,G__25003__$1);
}
});
cljfmt.core.line_break_QMARK_ = (function cljfmt$core$line_break_QMARK_(zloc){
var or__3949__auto__ = cljfmt.core.zlinebreak_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljfmt.core.comment_QMARK_.call(null,zloc);
}
});
cljfmt.core.skip_whitespace = (function cljfmt$core$skip_whitespace(zloc){
return rewrite_clj.zip.whitespace.skip.call(null,clojure.zip.next,cljfmt.core.whitespace_QMARK_,zloc);
});
cljfmt.core.count_newlines = (function cljfmt$core$count_newlines(zloc){
var zloc__$1 = zloc;
var newlines = (0);
while(true){
if(cljs.core.truth_(cljfmt.core.zlinebreak_QMARK_.call(null,zloc__$1))){
var G__25004 = cljfmt.core.skip_whitespace.call(null,clojure.zip.right.call(null,zloc__$1));
var G__25005 = (cljs.core.count.call(null,rewrite_clj.zip.string.call(null,zloc__$1)) + newlines);
zloc__$1 = G__25004;
newlines = G__25005;
continue;
} else {
return newlines;
}
break;
}
});
cljfmt.core.consecutive_blank_line_QMARK_ = (function cljfmt$core$consecutive_blank_line_QMARK_(zloc){
return (cljfmt.core.count_newlines.call(null,zloc) > (2));
});
cljfmt.core.remove_whitespace_and_newlines = (function cljfmt$core$remove_whitespace_and_newlines(zloc){
while(true){
if(cljs.core.truth_(cljfmt.core.zwhitespace_QMARK_.call(null,zloc))){
var G__25006 = clojure.zip.remove.call(null,zloc);
zloc = G__25006;
continue;
} else {
return zloc;
}
break;
}
});
cljfmt.core.replace_consecutive_blank_lines = (function cljfmt$core$replace_consecutive_blank_lines(zloc){
return cljfmt.core.remove_whitespace_and_newlines.call(null,clojure.zip.next.call(null,clojure.zip.replace.call(null,zloc,rewrite_clj.node.newlines.call(null,(2)))));
});
cljfmt.core.remove_consecutive_blank_lines = (function cljfmt$core$remove_consecutive_blank_lines(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.consecutive_blank_line_QMARK_,cljfmt.core.replace_consecutive_blank_lines);
});
cljfmt.core.indentation_QMARK_ = (function cljfmt$core$indentation_QMARK_(zloc){
var and__3938__auto__ = cljfmt.core.line_break_QMARK_.call(null,clojure.zip.prev.call(null,zloc));
if(cljs.core.truth_(and__3938__auto__)){
return cljfmt.core.whitespace_QMARK_.call(null,zloc);
} else {
return and__3938__auto__;
}
});
cljfmt.core.comment_next_QMARK_ = (function cljfmt$core$comment_next_QMARK_(zloc){
return cljfmt.core.comment_QMARK_.call(null,cljfmt.core.skip_whitespace.call(null,clojure.zip.next.call(null,zloc)));
});
cljfmt.core.line_break_next_QMARK_ = (function cljfmt$core$line_break_next_QMARK_(zloc){
return cljfmt.core.line_break_QMARK_.call(null,cljfmt.core.skip_whitespace.call(null,clojure.zip.next.call(null,zloc)));
});
cljfmt.core.should_indent_QMARK_ = (function cljfmt$core$should_indent_QMARK_(zloc){
var and__3938__auto__ = cljfmt.core.line_break_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,cljfmt.core.line_break_next_QMARK_.call(null,zloc));
} else {
return and__3938__auto__;
}
});
cljfmt.core.should_unindent_QMARK_ = (function cljfmt$core$should_unindent_QMARK_(zloc){
var and__3938__auto__ = cljfmt.core.indentation_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,cljfmt.core.comment_next_QMARK_.call(null,zloc));
} else {
return and__3938__auto__;
}
});
cljfmt.core.unindent = (function cljfmt$core$unindent(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.should_unindent_QMARK_,clojure.zip.remove);
});
cljfmt.core.start_element = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"meta*","meta*",-949431606),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"eval","eval",-1103567905)],["#(","^","~@","#","~","#^","#_","[","`","(","#'","'","@","#{","{","#="]);
cljfmt.core.prior_line_string = (function cljfmt$core$prior_line_string(zloc){
var zloc__$1 = zloc;
var worklist = cljs.core.List.EMPTY;
while(true){
var temp__5455__auto__ = clojure.zip.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var p = temp__5455__auto__;
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.string.call(null,rewrite_clj.zip.node.call(null,p)))].join('');
var new_worklist = cljs.core.cons.call(null,s,worklist);
if(cljs.core.not.call(null,cljfmt.core.includes_QMARK_.call(null,s,"\n"))){
var G__25007 = p;
var G__25008 = new_worklist;
zloc__$1 = G__25007;
worklist = G__25008;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,new_worklist);
}
} else {
var temp__5455__auto____$1 = clojure.zip.up.call(null,zloc__$1);
if(cljs.core.truth_(temp__5455__auto____$1)){
var p = temp__5455__auto____$1;
var G__25009 = p;
var G__25010 = cljs.core.cons.call(null,cljfmt.core.start_element.call(null,rewrite_clj.node.tag.call(null,rewrite_clj.zip.node.call(null,p))),worklist);
zloc__$1 = G__25009;
worklist = G__25010;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,worklist);
}
}
break;
}
});
cljfmt.core.last_line_in_string = (function cljfmt$core$last_line_in_string(s){
return cljs.core.subs.call(null,s,(s.lastIndexOf("\n") + (1)));
});
cljfmt.core.margin = (function cljfmt$core$margin(zloc){
return cljs.core.count.call(null,cljfmt.core.last_line_in_string.call(null,cljfmt.core.prior_line_string.call(null,zloc)));
});
cljfmt.core.whitespace = (function cljfmt$core$whitespace(width){
return rewrite_clj.node.whitespace_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,width," ")));
});
cljfmt.core.coll_indent = (function cljfmt$core$coll_indent(zloc){
return cljfmt.core.margin.call(null,clojure.zip.leftmost.call(null,zloc));
});
cljfmt.core.index_of = (function cljfmt$core$index_of(zloc){
return (cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,rewrite_clj.zip.left,zloc))) - (1));
});
cljfmt.core.list_indent = (function cljfmt$core$list_indent(zloc){
if((cljfmt.core.index_of.call(null,zloc) > (1))){
return cljfmt.core.margin.call(null,rewrite_clj.zip.right.call(null,clojure.zip.leftmost.call(null,zloc)));
} else {
return cljfmt.core.coll_indent.call(null,zloc);
}
});
cljfmt.core.indent_size = (2);
cljfmt.core.indent_width = (function cljfmt$core$indent_width(zloc){
var G__25011 = rewrite_clj.zip.tag.call(null,zloc);
var G__25011__$1 = (((G__25011 instanceof cljs.core.Keyword))?G__25011.fqn:null);
switch (G__25011__$1) {
case "list":
return cljfmt.core.indent_size;

break;
case "fn":
return (cljfmt.core.indent_size + (1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25011__$1)].join('')));

}
});
cljfmt.core.remove_namespace = (function cljfmt$core$remove_namespace(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,cljs.core.name.call(null,x));
} else {
return x;
}
});
cljfmt.core.pattern_QMARK_ = (function cljfmt$core$pattern_QMARK_(v){
return (v instanceof RegExp);
});
cljfmt.core.indent_matches_QMARK_ = (function cljfmt$core$indent_matches_QMARK_(key,sym){
if((key instanceof cljs.core.Symbol)){
return cljs.core._EQ_.call(null,key,sym);
} else {
if(cljs.core.truth_(cljfmt.core.pattern_QMARK_.call(null,key))){
return cljs.core.re_find.call(null,key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
} else {
return null;
}
}
});
cljfmt.core.token_QMARK_ = (function cljfmt$core$token_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
});
cljfmt.core.token_value = (function cljfmt$core$token_value(zloc){
var and__3938__auto__ = cljfmt.core.token_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
return rewrite_clj.zip.sexpr.call(null,zloc);
} else {
return and__3938__auto__;
}
});
cljfmt.core.reader_conditional_QMARK_ = (function cljfmt$core$reader_conditional_QMARK_(zloc){
var and__3938__auto__ = cljfmt.core.reader_macro_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["?",null,"?@",null], null), null).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljfmt.core.token_value.call(null,rewrite_clj.zip.down.call(null,zloc)))].join(''));
} else {
return and__3938__auto__;
}
});
cljfmt.core.form_symbol = (function cljfmt$core$form_symbol(zloc){
return cljfmt.core.remove_namespace.call(null,cljfmt.core.token_value.call(null,rewrite_clj.zip.leftmost.call(null,zloc)));
});
cljfmt.core.index_matches_top_argument_QMARK_ = (function cljfmt$core$index_matches_top_argument_QMARK_(zloc,depth,idx){
return (((depth > (0))) && (cljs.core._EQ_.call(null,idx,cljfmt.core.index_of.call(null,cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.zip.up,zloc),(depth - (1)))))));
});
cljfmt.core.inner_indent = (function cljfmt$core$inner_indent(zloc,key,depth,idx){
var top = cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.zip.up,zloc),depth);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.form_symbol.call(null,top));
if(cljs.core.truth_(and__3938__auto__)){
var or__3949__auto__ = (idx == null);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljfmt.core.index_matches_top_argument_QMARK_.call(null,zloc,depth,idx);
}
} else {
return and__3938__auto__;
}
})())){
var zup = rewrite_clj.zip.up.call(null,zloc);
return (cljfmt.core.margin.call(null,zup) + cljfmt.core.indent_width.call(null,zup));
} else {
return null;
}
});
cljfmt.core.nth_form = (function cljfmt$core$nth_form(zloc,n){
return cljs.core.reduce.call(null,(function (z,f){
if(cljs.core.truth_(z)){
return f.call(null,z);
} else {
return null;
}
}),rewrite_clj.zip.leftmost.call(null,zloc),cljs.core.repeat.call(null,n,rewrite_clj.zip.right));
});
cljfmt.core.first_form_in_line_QMARK_ = (function cljfmt$core$first_form_in_line_QMARK_(zloc){
while(true){
var temp__5455__auto__ = clojure.zip.left.call(null,zloc);
if(cljs.core.truth_(temp__5455__auto__)){
var zloc__$1 = temp__5455__auto__;
if(cljs.core.truth_(cljfmt.core.whitespace_QMARK_.call(null,zloc__$1))){
var G__25013 = zloc__$1;
zloc = G__25013;
continue;
} else {
var or__3949__auto__ = cljfmt.core.zlinebreak_QMARK_.call(null,zloc__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljfmt.core.comment_QMARK_.call(null,zloc__$1);
}
}
} else {
return true;
}
break;
}
});
cljfmt.core.block_indent = (function cljfmt$core$block_indent(zloc,key,idx){
if(cljs.core.truth_(cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.form_symbol.call(null,zloc)))){
if(cljs.core.truth_((function (){var and__3938__auto__ = (function (){var G__25015 = zloc;
var G__25015__$1 = (((G__25015 == null))?null:cljfmt.core.nth_form.call(null,G__25015,(idx + (1))));
if((G__25015__$1 == null)){
return null;
} else {
return cljfmt.core.first_form_in_line_QMARK_.call(null,G__25015__$1);
}
})();
if(cljs.core.truth_(and__3938__auto__)){
return (cljfmt.core.index_of.call(null,zloc) > idx);
} else {
return and__3938__auto__;
}
})())){
return cljfmt.core.inner_indent.call(null,zloc,key,(0),null);
} else {
return cljfmt.core.list_indent.call(null,zloc);
}
} else {
return null;
}
});
cljfmt.core.default_indents = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"are","are",1713001856,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),new cljs.core.Symbol(null,"while","while",-1691317983,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"bound-fn","bound-fn",125411266,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"testing","testing",-1492767066,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"go","go",1493584872,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"with-precision","with-precision",393049897,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"defstruct","defstruct",-506568086,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"future","future",-776593045,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"alt!","alt!",1759993452,null),new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"extend","extend",-817951763,null),new cljs.core.Symbol(null,"go-loop","go-loop",692273294,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"deftest","deftest",938248815,null),new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null),new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"reify","reify",1885539699,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"alt!!","alt!!",662409428,null),new cljs.core.Symbol(null,"defprotocol","defprotocol",1388695348,null),new cljs.core.Symbol(null,"letfn","letfn",-480490827,null),new cljs.core.Symbol(null,"use-fixtures","use-fixtures",-1608548619,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"proxy","proxy",1523077913,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"thread","thread",-1707434245,null),new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"def","def",597100991,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(2),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"defroutes","defroutes",-1310011104,null),new cljs.core.Symbol(null,"PUT","PUT",-201468416,null),new cljs.core.Symbol(null,"POST","POST",1750988384,null),new cljs.core.Symbol(null,"let-routes","let-routes",-376261774,null),new cljs.core.Symbol(null,"DELETE","DELETE",-965761997,null),new cljs.core.Symbol(null,"rfn","rfn",649648083,null),new cljs.core.Symbol(null,"ANY","ANY",1875082901,null),new cljs.core.Symbol(null,"GET","GET",-917844743,null),new cljs.core.Symbol(null,"HEAD","HEAD",1903810169,null),new cljs.core.Symbol(null,"PATCH","PATCH",-1233173284,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"OPTIONS","OPTIONS",742094783,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)]),new cljs.core.PersistentArrayMap(null, 2, [/^def/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),/^with-/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)], null));
if((typeof cljfmt !== 'undefined') && (typeof cljfmt.core !== 'undefined') && (typeof cljfmt.core.indenter_fn !== 'undefined')){
} else {
cljfmt.core.indenter_fn = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljfmt.core","indenter-fn"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (sym,p__25016){
var vec__25017 = p__25016;
var seq__25018 = cljs.core.seq.call(null,vec__25017);
var first__25019 = cljs.core.first.call(null,seq__25018);
var seq__25018__$1 = cljs.core.next.call(null,seq__25018);
var type = first__25019;
var args = seq__25018__$1;
return type;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,cljfmt.core.indenter_fn,new cljs.core.Keyword(null,"inner","inner",-1383171215),(function (sym,p__25020){
var vec__25021 = p__25020;
var _ = cljs.core.nth.call(null,vec__25021,(0),null);
var depth = cljs.core.nth.call(null,vec__25021,(1),null);
var idx = cljs.core.nth.call(null,vec__25021,(2),null);
return ((function (vec__25021,_,depth,idx){
return (function (zloc){
return cljfmt.core.inner_indent.call(null,zloc,sym,depth,idx);
});
;})(vec__25021,_,depth,idx))
}));
cljs.core._add_method.call(null,cljfmt.core.indenter_fn,new cljs.core.Keyword(null,"block","block",664686210),(function (sym,p__25024){
var vec__25025 = p__25024;
var _ = cljs.core.nth.call(null,vec__25025,(0),null);
var idx = cljs.core.nth.call(null,vec__25025,(1),null);
return ((function (vec__25025,_,idx){
return (function (zloc){
return cljfmt.core.block_indent.call(null,zloc,sym,idx);
});
;})(vec__25025,_,idx))
}));
cljfmt.core.make_indenter = (function cljfmt$core$make_indenter(p__25028){
var vec__25029 = p__25028;
var key = cljs.core.nth.call(null,vec__25029,(0),null);
var opts = cljs.core.nth.call(null,vec__25029,(1),null);
return cljs.core.apply.call(null,cljs.core.some_fn,cljs.core.map.call(null,cljs.core.partial.call(null,cljfmt.core.indenter_fn,key),opts));
});
cljfmt.core.indent_order = (function cljfmt$core$indent_order(p__25032){
var vec__25033 = p__25032;
var key = cljs.core.nth.call(null,vec__25033,(0),null);
var _ = cljs.core.nth.call(null,vec__25033,(1),null);
if((key instanceof cljs.core.Symbol)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
if(cljs.core.truth_(cljfmt.core.pattern_QMARK_.call(null,key))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
return null;
}
}
});
cljfmt.core.custom_indent = (function cljfmt$core$custom_indent(zloc,indents){
if(cljs.core.empty_QMARK_.call(null,indents)){
return cljfmt.core.list_indent.call(null,zloc);
} else {
var indenter = cljs.core.apply.call(null,cljs.core.some_fn,cljs.core.map.call(null,cljfmt.core.make_indenter,cljs.core.sort_by.call(null,cljfmt.core.indent_order,indents)));
var or__3949__auto__ = indenter.call(null,zloc);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljfmt.core.list_indent.call(null,zloc);
}
}
});
cljfmt.core.indent_amount = (function cljfmt$core$indent_amount(zloc,indents){
var tag = rewrite_clj.zip.tag.call(null,rewrite_clj.zip.up.call(null,zloc));
var gp = rewrite_clj.zip.up.call(null,rewrite_clj.zip.up.call(null,zloc));
if(cljs.core.truth_(cljfmt.core.reader_conditional_QMARK_.call(null,gp))){
return cljfmt.core.coll_indent.call(null,zloc);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null).call(null,tag))){
return cljfmt.core.custom_indent.call(null,zloc,indents);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),tag)){
return cljfmt.core.indent_amount.call(null,rewrite_clj.zip.up.call(null,zloc),indents);
} else {
return cljfmt.core.coll_indent.call(null,zloc);

}
}
}
});
cljfmt.core.indent_line = (function cljfmt$core$indent_line(zloc,indents){
var width = cljfmt.core.indent_amount.call(null,zloc,indents);
if((width > (0))){
return clojure.zip.insert_right.call(null,zloc,cljfmt.core.whitespace.call(null,width));
} else {
return zloc;
}
});
cljfmt.core.indent = (function cljfmt$core$indent(var_args){
var G__25038 = arguments.length;
switch (G__25038) {
case 1:
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljfmt.core.indent.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljfmt.core.indent.call(null,form,cljfmt.core.default_indents);
});

cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.should_indent_QMARK_,(function (p1__25036_SHARP_){
return cljfmt.core.indent_line.call(null,p1__25036_SHARP_,indents);
}));
});

cljfmt.core.indent.cljs$lang$maxFixedArity = 2;

cljfmt.core.reindent = (function cljfmt$core$reindent(var_args){
var G__25041 = arguments.length;
switch (G__25041) {
case 1:
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljfmt.core.indent.call(null,cljfmt.core.unindent.call(null,form));
});

cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.indent.call(null,cljfmt.core.unindent.call(null,form),indents);
});

cljfmt.core.reindent.cljs$lang$maxFixedArity = 2;

cljfmt.core.root_QMARK_ = (function cljfmt$core$root_QMARK_(zloc){
return (clojure.zip.up.call(null,zloc) == null);
});
cljfmt.core.final_QMARK_ = (function cljfmt$core$final_QMARK_(zloc){
var and__3938__auto__ = (clojure.zip.right.call(null,zloc) == null);
if(and__3938__auto__){
return cljfmt.core.root_QMARK_.call(null,clojure.zip.up.call(null,zloc));
} else {
return and__3938__auto__;
}
});
cljfmt.core.trailing_whitespace_QMARK_ = (function cljfmt$core$trailing_whitespace_QMARK_(zloc){
var and__3938__auto__ = cljfmt.core.whitespace_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3938__auto__)){
var or__3949__auto__ = cljfmt.core.zlinebreak_QMARK_.call(null,clojure.zip.right.call(null,zloc));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljfmt.core.final_QMARK_.call(null,zloc);
}
} else {
return and__3938__auto__;
}
});
cljfmt.core.remove_trailing_whitespace = (function cljfmt$core$remove_trailing_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.trailing_whitespace_QMARK_,clojure.zip.remove);
});
cljfmt.core.reformat_form = (function cljfmt$core$reformat_form(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25056 = arguments.length;
var i__4532__auto___25057 = (0);
while(true){
if((i__4532__auto___25057 < len__4531__auto___25056)){
args__4534__auto__.push((arguments[i__4532__auto___25057]));

var G__25058 = (i__4532__auto___25057 + (1));
i__4532__auto___25057 = G__25058;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__25045){
var vec__25046 = p__25045;
var map__25049 = cljs.core.nth.call(null,vec__25046,(0),null);
var map__25049__$1 = ((((!((map__25049 == null)))?(((((map__25049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25049):map__25049);
var opts = map__25049__$1;
var G__25051 = (function (){var G__25052 = (function (){var G__25053 = (function (){var G__25054 = (function (){var G__25055 = form;
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-consecutive-blank-lines?","remove-consecutive-blank-lines?",982824512).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.remove_consecutive_blank_lines.call(null,G__25055);
} else {
return G__25055;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-surrounding-whitespace?","remove-surrounding-whitespace?",-2083582887).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.remove_surrounding_whitespace.call(null,G__25054);
} else {
return G__25054;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"insert-missing-whitespace?","insert-missing-whitespace?",-1012188573).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.insert_missing_whitespace.call(null,G__25053);
} else {
return G__25053;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"indentation?","indentation?",-649129482).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.reindent.call(null,G__25052,new cljs.core.Keyword(null,"indents","indents",-569647275).cljs$core$IFn$_invoke$arity$2(opts,cljfmt.core.default_indents));
} else {
return G__25052;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-trailing-whitespace?","remove-trailing-whitespace?",251206854).cljs$core$IFn$_invoke$arity$2(opts,true))){
return cljfmt.core.remove_trailing_whitespace.call(null,G__25051);
} else {
return G__25051;
}
});

cljfmt.core.reformat_form.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljfmt.core.reformat_form.cljs$lang$applyTo = (function (seq25043){
var G__25044 = cljs.core.first.call(null,seq25043);
var seq25043__$1 = cljs.core.next.call(null,seq25043);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25044,seq25043__$1);
});

cljfmt.core.reformat_string = (function cljfmt$core$reformat_string(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25065 = arguments.length;
var i__4532__auto___25066 = (0);
while(true){
if((i__4532__auto___25066 < len__4531__auto___25065)){
args__4534__auto__.push((arguments[i__4532__auto___25066]));

var G__25067 = (i__4532__auto___25066 + (1));
i__4532__auto___25066 = G__25067;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$variadic = (function (form_string,p__25061){
var vec__25062 = p__25061;
var options = cljs.core.nth.call(null,vec__25062,(0),null);
return rewrite_clj.node.string.call(null,cljfmt.core.reformat_form.call(null,rewrite_clj.parser.parse_string_all.call(null,form_string),options));
});

cljfmt.core.reformat_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljfmt.core.reformat_string.cljs$lang$applyTo = (function (seq25059){
var G__25060 = cljs.core.first.call(null,seq25059);
var seq25059__$1 = cljs.core.next.call(null,seq25059);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25060,seq25059__$1);
});


//# sourceMappingURL=core.js.map
