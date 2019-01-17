(ns webgl-mini.tetris
  (:require [webgl-mini.bindings :as b]))

(def canvas (create-canvas 500 500))
(def gl (get-context canvas "webgl2"))

(js/alert "med dig")

(defn init-game []
  "running game"
  (println "running tetris"))
