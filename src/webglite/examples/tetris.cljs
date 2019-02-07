(ns webglite.examples.tetris
  (:require
    cljsjs.gl-matrix
    [webglite.bindings :as gl]
    [webglite.constants :as c]
    [webglite.glsh-helper :as h]))

(defonce mycanvas (gl/create-canvas 400 400))
(defonce ctx (gl/get-context mycanvas "webgl2"))

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
  (let [shader (gl/create-shader ctx type)]
    (gl/shader-source ctx shader source)
    (gl/compile-shader ctx shader)
    (if-not (gl/get-shader-parameter ctx shader c/COMPILE_STATUS)
      (do
        (js/alert (str "couldn't compile shader " (gl/get-shader-info-log ctx shader)))
        (gl/delete-shader ctx shader)
        nil)
      shader)))

(defn init-shader-program []
  (let [
        vertex-shader (compile-shader c/VERTEX_SHADER vs-source)
        fragment-shader (compile-shader c/FRAGMENT_SHADER fs-source)
        shader-program (gl/create-program ctx)]
    (gl/attach-shader ctx shader-program vertex-shader)
    (gl/attach-shader ctx shader-program fragment-shader)
    (gl/link-program ctx shader-program)
    (if-not (gl/get-program-parameter ctx shader-program c/LINK_STATUS)
      (do
        (js/alert (str "couldn't init program " (gl/get-program-info-log ctx shader-program)))
        nil)
      shader-program)))

(def program (init-shader-program))
(def attrib-locations {
                       :vertex-position (gl/get-attrib-location ctx program "aVertexPosition")})

(def uniform-locations {
                        :projection-matrix (gl/get-uniform-location ctx program "uProjectionMatrix")
                        :model-view-matrix (gl/get-uniform-location ctx program "uModelViewMatrix")
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
  (gl/clear-color ctx 0.0 0.0 0.0 1.0)
  (gl/clear-depth ctx 1.0)
  (gl/enable ctx c/DEPTH_TEST)
  (gl/depth-func ctx c/LEQUAL)
  (gl/clear ctx (or c/COLOR_BUFFER_BIT c/DEPTH_BUFFER_BIT))
  (println (.create js/mat4)))

(defn init-game []
  (draw-scene)
  (if (gl/not-nil ctx)
    (println "webgl is on")
    (println "no webgl!"))
  (println vs-source)
  (println fs-source)
  (gl/clear-color ctx 0.2 0.5 1 1)
  (gl/clear ctx c/COLOR_BUFFER_BIT))
