// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23329){
var map__23330 = p__23329;
var map__23330__$1 = ((((!((map__23330 == null)))?(((((map__23330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23330):map__23330);
var m = map__23330__$1;
var n = cljs.core.get.call(null,map__23330__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23330__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23332_23354 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23333_23355 = null;
var count__23334_23356 = (0);
var i__23335_23357 = (0);
while(true){
if((i__23335_23357 < count__23334_23356)){
var f_23358 = cljs.core._nth.call(null,chunk__23333_23355,i__23335_23357);
cljs.core.println.call(null,"  ",f_23358);


var G__23359 = seq__23332_23354;
var G__23360 = chunk__23333_23355;
var G__23361 = count__23334_23356;
var G__23362 = (i__23335_23357 + (1));
seq__23332_23354 = G__23359;
chunk__23333_23355 = G__23360;
count__23334_23356 = G__23361;
i__23335_23357 = G__23362;
continue;
} else {
var temp__5457__auto___23363 = cljs.core.seq.call(null,seq__23332_23354);
if(temp__5457__auto___23363){
var seq__23332_23364__$1 = temp__5457__auto___23363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23332_23364__$1)){
var c__4351__auto___23365 = cljs.core.chunk_first.call(null,seq__23332_23364__$1);
var G__23366 = cljs.core.chunk_rest.call(null,seq__23332_23364__$1);
var G__23367 = c__4351__auto___23365;
var G__23368 = cljs.core.count.call(null,c__4351__auto___23365);
var G__23369 = (0);
seq__23332_23354 = G__23366;
chunk__23333_23355 = G__23367;
count__23334_23356 = G__23368;
i__23335_23357 = G__23369;
continue;
} else {
var f_23370 = cljs.core.first.call(null,seq__23332_23364__$1);
cljs.core.println.call(null,"  ",f_23370);


var G__23371 = cljs.core.next.call(null,seq__23332_23364__$1);
var G__23372 = null;
var G__23373 = (0);
var G__23374 = (0);
seq__23332_23354 = G__23371;
chunk__23333_23355 = G__23372;
count__23334_23356 = G__23373;
i__23335_23357 = G__23374;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23375 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23375);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23375)))?cljs.core.second.call(null,arglists_23375):arglists_23375));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23336_23376 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23337_23377 = null;
var count__23338_23378 = (0);
var i__23339_23379 = (0);
while(true){
if((i__23339_23379 < count__23338_23378)){
var vec__23340_23380 = cljs.core._nth.call(null,chunk__23337_23377,i__23339_23379);
var name_23381 = cljs.core.nth.call(null,vec__23340_23380,(0),null);
var map__23343_23382 = cljs.core.nth.call(null,vec__23340_23380,(1),null);
var map__23343_23383__$1 = ((((!((map__23343_23382 == null)))?(((((map__23343_23382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23343_23382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23343_23382):map__23343_23382);
var doc_23384 = cljs.core.get.call(null,map__23343_23383__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23385 = cljs.core.get.call(null,map__23343_23383__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23381);

cljs.core.println.call(null," ",arglists_23385);

if(cljs.core.truth_(doc_23384)){
cljs.core.println.call(null," ",doc_23384);
} else {
}


var G__23386 = seq__23336_23376;
var G__23387 = chunk__23337_23377;
var G__23388 = count__23338_23378;
var G__23389 = (i__23339_23379 + (1));
seq__23336_23376 = G__23386;
chunk__23337_23377 = G__23387;
count__23338_23378 = G__23388;
i__23339_23379 = G__23389;
continue;
} else {
var temp__5457__auto___23390 = cljs.core.seq.call(null,seq__23336_23376);
if(temp__5457__auto___23390){
var seq__23336_23391__$1 = temp__5457__auto___23390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23336_23391__$1)){
var c__4351__auto___23392 = cljs.core.chunk_first.call(null,seq__23336_23391__$1);
var G__23393 = cljs.core.chunk_rest.call(null,seq__23336_23391__$1);
var G__23394 = c__4351__auto___23392;
var G__23395 = cljs.core.count.call(null,c__4351__auto___23392);
var G__23396 = (0);
seq__23336_23376 = G__23393;
chunk__23337_23377 = G__23394;
count__23338_23378 = G__23395;
i__23339_23379 = G__23396;
continue;
} else {
var vec__23345_23397 = cljs.core.first.call(null,seq__23336_23391__$1);
var name_23398 = cljs.core.nth.call(null,vec__23345_23397,(0),null);
var map__23348_23399 = cljs.core.nth.call(null,vec__23345_23397,(1),null);
var map__23348_23400__$1 = ((((!((map__23348_23399 == null)))?(((((map__23348_23399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23348_23399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23348_23399):map__23348_23399);
var doc_23401 = cljs.core.get.call(null,map__23348_23400__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23402 = cljs.core.get.call(null,map__23348_23400__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23398);

cljs.core.println.call(null," ",arglists_23402);

if(cljs.core.truth_(doc_23401)){
cljs.core.println.call(null," ",doc_23401);
} else {
}


var G__23403 = cljs.core.next.call(null,seq__23336_23391__$1);
var G__23404 = null;
var G__23405 = (0);
var G__23406 = (0);
seq__23336_23376 = G__23403;
chunk__23337_23377 = G__23404;
count__23338_23378 = G__23405;
i__23339_23379 = G__23406;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__23350 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23351 = null;
var count__23352 = (0);
var i__23353 = (0);
while(true){
if((i__23353 < count__23352)){
var role = cljs.core._nth.call(null,chunk__23351,i__23353);
var temp__5457__auto___23407__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23407__$1)){
var spec_23408 = temp__5457__auto___23407__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23408));
} else {
}


var G__23409 = seq__23350;
var G__23410 = chunk__23351;
var G__23411 = count__23352;
var G__23412 = (i__23353 + (1));
seq__23350 = G__23409;
chunk__23351 = G__23410;
count__23352 = G__23411;
i__23353 = G__23412;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__23350);
if(temp__5457__auto____$1){
var seq__23350__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23350__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23350__$1);
var G__23413 = cljs.core.chunk_rest.call(null,seq__23350__$1);
var G__23414 = c__4351__auto__;
var G__23415 = cljs.core.count.call(null,c__4351__auto__);
var G__23416 = (0);
seq__23350 = G__23413;
chunk__23351 = G__23414;
count__23352 = G__23415;
i__23353 = G__23416;
continue;
} else {
var role = cljs.core.first.call(null,seq__23350__$1);
var temp__5457__auto___23417__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23417__$2)){
var spec_23418 = temp__5457__auto___23417__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23418));
} else {
}


var G__23419 = cljs.core.next.call(null,seq__23350__$1);
var G__23420 = null;
var G__23421 = (0);
var G__23422 = (0);
seq__23350 = G__23419;
chunk__23351 = G__23420;
count__23352 = G__23421;
i__23353 = G__23422;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
