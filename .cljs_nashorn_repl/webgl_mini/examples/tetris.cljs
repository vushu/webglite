(ns webgl-mini.examples.tetris
  (:require [webgl-mini.bindings :as gl]
            [webgl-mini.glsh-helper :as h]))

(defn mycanvas [] (gl/create-canvas 400 400))
(gl/get-context (mycanvas) "webgl2")

(def vs-source
  (str
    (h/att-vec4 "aVertexPosition")
    (h/uni-mat4 "uModelViewMatrix")
    (h/uni-mat4 "uProjectionMatrix")
    (h/main (h/assign "gl_Position" (h/mul "uProjectionMatrix" "uModelViewMatrix" "aVertexPosition")))))
(defn init-game []
  (if (gl/not-nil)
    (println "webgl is on")
    (println "no webgl!"))
  (println vs-source)
  (gl/clear-color 0.2 0.5 1 1)
  (gl/clear (gl/color-buffer-bit)))
