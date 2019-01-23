(ns webglite.examples.tetris
  (:require
    cljsjs.gl-matrix
    [webglite.bindings :as gl]
    [webglite.glsh-helper :as h])
  )

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

(def program (init-shader-program))
(def attrib-locations {
                       :vertex-position (gl/get-attrib-location program "aVertexPosition")})

(def uniform-locations {
                        :projection-matrix (gl/get-uniform-location program "uProjectionMatrix")
                        :model-view-matrix (gl/get-uniform-location program "uModelViewMatrix")
                        })

(def position [-1.0 1.0
                 1.0 1.0
                 -1.0 -1.0
                 1.0 -1.0])
;(defn init-buffers
  ;(let [position-buffer (gl/create-buffer)]
    ;(gl/array-buffer position-buffer)
    ;(gl/buffer-data (gl/array-buffer) (Float32Array. position (gl/static-draw)))
    ;position-buffer))

(defn draw-scene []
  (gl/clear-color 0.0 0.0 0.0 1.0)
  (gl/clear-depth 1.0)
  (gl/enable (gl/depth-test))
  (gl/depth-func (gl/lequal))
  (gl/clear (or (gl/color-buffer-bit) (gl/depth-buffer-bit)))
  (println "here")
  (println (.create js/mat4))
  (println "end")
  )

(defn init-game []
  (draw-scene)
  (if (gl/not-nil)
    (println "webgl is on")
    (println "no webgl!"))
  (println vs-source)
  (println fs-source)
  ;(gl/clear-color 0.2 0.5 1 1)
  ;(gl/clear (gl/color-buffer-bit))
  )
