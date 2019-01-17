// Compiled by ClojureScript 1.10.339 {:target :nashorn}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__7468){
var map__7469 = p__7468;
var map__7469__$1 = ((((!((map__7469 == null)))?(((((map__7469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7469):map__7469);
var m = map__7469__$1;
var n = cljs.core.get.call(null,map__7469__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__7469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__7471_7493 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7472_7494 = null;
var count__7473_7495 = (0);
var i__7474_7496 = (0);
while(true){
if((i__7474_7496 < count__7473_7495)){
var f_7497 = cljs.core._nth.call(null,chunk__7472_7494,i__7474_7496);
cljs.core.println.call(null,"  ",f_7497);


var G__7498 = seq__7471_7493;
var G__7499 = chunk__7472_7494;
var G__7500 = count__7473_7495;
var G__7501 = (i__7474_7496 + (1));
seq__7471_7493 = G__7498;
chunk__7472_7494 = G__7499;
count__7473_7495 = G__7500;
i__7474_7496 = G__7501;
continue;
} else {
var temp__5457__auto___7502 = cljs.core.seq.call(null,seq__7471_7493);
if(temp__5457__auto___7502){
var seq__7471_7503__$1 = temp__5457__auto___7502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7471_7503__$1)){
var c__4351__auto___7504 = cljs.core.chunk_first.call(null,seq__7471_7503__$1);
var G__7505 = cljs.core.chunk_rest.call(null,seq__7471_7503__$1);
var G__7506 = c__4351__auto___7504;
var G__7507 = cljs.core.count.call(null,c__4351__auto___7504);
var G__7508 = (0);
seq__7471_7493 = G__7505;
chunk__7472_7494 = G__7506;
count__7473_7495 = G__7507;
i__7474_7496 = G__7508;
continue;
} else {
var f_7509 = cljs.core.first.call(null,seq__7471_7503__$1);
cljs.core.println.call(null,"  ",f_7509);


var G__7510 = cljs.core.next.call(null,seq__7471_7503__$1);
var G__7511 = null;
var G__7512 = (0);
var G__7513 = (0);
seq__7471_7493 = G__7510;
chunk__7472_7494 = G__7511;
count__7473_7495 = G__7512;
i__7474_7496 = G__7513;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_7514 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_7514);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_7514)))?cljs.core.second.call(null,arglists_7514):arglists_7514));
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
var seq__7475_7515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7476_7516 = null;
var count__7477_7517 = (0);
var i__7478_7518 = (0);
while(true){
if((i__7478_7518 < count__7477_7517)){
var vec__7479_7519 = cljs.core._nth.call(null,chunk__7476_7516,i__7478_7518);
var name_7520 = cljs.core.nth.call(null,vec__7479_7519,(0),null);
var map__7482_7521 = cljs.core.nth.call(null,vec__7479_7519,(1),null);
var map__7482_7522__$1 = ((((!((map__7482_7521 == null)))?(((((map__7482_7521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7482_7521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7482_7521):map__7482_7521);
var doc_7523 = cljs.core.get.call(null,map__7482_7522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7524 = cljs.core.get.call(null,map__7482_7522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7520);

cljs.core.println.call(null," ",arglists_7524);

if(cljs.core.truth_(doc_7523)){
cljs.core.println.call(null," ",doc_7523);
} else {
}


var G__7525 = seq__7475_7515;
var G__7526 = chunk__7476_7516;
var G__7527 = count__7477_7517;
var G__7528 = (i__7478_7518 + (1));
seq__7475_7515 = G__7525;
chunk__7476_7516 = G__7526;
count__7477_7517 = G__7527;
i__7478_7518 = G__7528;
continue;
} else {
var temp__5457__auto___7529 = cljs.core.seq.call(null,seq__7475_7515);
if(temp__5457__auto___7529){
var seq__7475_7530__$1 = temp__5457__auto___7529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7475_7530__$1)){
var c__4351__auto___7531 = cljs.core.chunk_first.call(null,seq__7475_7530__$1);
var G__7532 = cljs.core.chunk_rest.call(null,seq__7475_7530__$1);
var G__7533 = c__4351__auto___7531;
var G__7534 = cljs.core.count.call(null,c__4351__auto___7531);
var G__7535 = (0);
seq__7475_7515 = G__7532;
chunk__7476_7516 = G__7533;
count__7477_7517 = G__7534;
i__7478_7518 = G__7535;
continue;
} else {
var vec__7484_7536 = cljs.core.first.call(null,seq__7475_7530__$1);
var name_7537 = cljs.core.nth.call(null,vec__7484_7536,(0),null);
var map__7487_7538 = cljs.core.nth.call(null,vec__7484_7536,(1),null);
var map__7487_7539__$1 = ((((!((map__7487_7538 == null)))?(((((map__7487_7538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7487_7538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7487_7538):map__7487_7538);
var doc_7540 = cljs.core.get.call(null,map__7487_7539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_7541 = cljs.core.get.call(null,map__7487_7539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_7537);

cljs.core.println.call(null," ",arglists_7541);

if(cljs.core.truth_(doc_7540)){
cljs.core.println.call(null," ",doc_7540);
} else {
}


var G__7542 = cljs.core.next.call(null,seq__7475_7530__$1);
var G__7543 = null;
var G__7544 = (0);
var G__7545 = (0);
seq__7475_7515 = G__7542;
chunk__7476_7516 = G__7543;
count__7477_7517 = G__7544;
i__7478_7518 = G__7545;
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

var seq__7489 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__7490 = null;
var count__7491 = (0);
var i__7492 = (0);
while(true){
if((i__7492 < count__7491)){
var role = cljs.core._nth.call(null,chunk__7490,i__7492);
var temp__5457__auto___7546__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___7546__$1)){
var spec_7547 = temp__5457__auto___7546__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7547));
} else {
}


var G__7548 = seq__7489;
var G__7549 = chunk__7490;
var G__7550 = count__7491;
var G__7551 = (i__7492 + (1));
seq__7489 = G__7548;
chunk__7490 = G__7549;
count__7491 = G__7550;
i__7492 = G__7551;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__7489);
if(temp__5457__auto____$1){
var seq__7489__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7489__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__7489__$1);
var G__7552 = cljs.core.chunk_rest.call(null,seq__7489__$1);
var G__7553 = c__4351__auto__;
var G__7554 = cljs.core.count.call(null,c__4351__auto__);
var G__7555 = (0);
seq__7489 = G__7552;
chunk__7490 = G__7553;
count__7491 = G__7554;
i__7492 = G__7555;
continue;
} else {
var role = cljs.core.first.call(null,seq__7489__$1);
var temp__5457__auto___7556__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___7556__$2)){
var spec_7557 = temp__5457__auto___7556__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_7557));
} else {
}


var G__7558 = cljs.core.next.call(null,seq__7489__$1);
var G__7559 = null;
var G__7560 = (0);
var G__7561 = (0);
seq__7489 = G__7558;
chunk__7490 = G__7559;
count__7491 = G__7560;
i__7492 = G__7561;
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
