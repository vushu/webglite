(ns webglite.examples.tetris
  (:require [webglite.bindings :as gl]
            [webglite.glsh-helper :as h]))

(defn mycanvas [] (gl/create-canvas 400 400))
(gl/get-context (mycanvas) "webgl2")

(def vs-source
  (str
    (h/att-vec4 "aVertexPosition")
    (h/uni-mat4 "uModelViewMatrix")
    (h/uni-mat4 "uProjectionMatrix")
    (h/main (h/assign "gl_Position" (h/mul "uProjectionMatrix" "uModelViewMatrix" "aVertexPosition")))))

(def fs-source
  (str
    (h/main (h/assign "gl_FragColor" (h/vec4 1.0 1.0 1.0 1.0)))))

(defn compile-shader [type source]
  (let [shader (gl/create-shader type)]
    (gl/shader-source shader source)
    (gl/compile-shader shader)
    (if-not (gl/get-shader-parameter shader (gl/compile-status))
      (do
        (js/alert (str "couldn't compile shader " (gl/get-shader-info-log shader)))
        (gl/delete-shader shader)
        nil)
      shader)))

(defn init-shader-program []
  (let [
        vertex-shader (compile-shader (gl/vertex-shader) vs-source)
        fragment-shader (compile-shader (gl/fragment-shader) fs-source)
        shader-program (gl/create-program)]
    (gl/attach-shader shader-program vertex-shader)
    (gl/attach-shader shader-program fragment-shader)
    (gl/link-program shader-program)
    (if-not (gl/get-program-parameter shader-program (gl/link-status))
      (do
        (js/alert (str "couldn't init program " (gl/get-program-info-log shader-program)))
        nil)
      shader-program)))

(defn init-game []
  (if (gl/not-nil)
    (println "webgl is on")
    (println "no webgl!"))
  (println vs-source)
  (println fs-source)
  (gl/clear-color 0.2 0.5 1 1)
  (gl/clear (gl/color-buffer-bit)))
