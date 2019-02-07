(ns webglite.examples.twod
  (:require
    cljsjs.gl-matrix
    [webglite.bindings :as gl]
    [webglite.canvas :as canvas]
    [webglite.constants :as c]
    [webglite.glsh-helper :as h]))

(defonce mycanvas (gl/create-canvas 400 400))
(def ctx (gl/get-context mycanvas "webgl2"))


(def vertex-shader-source
  (str
    "#version 300 es\n"
    (h/in-vec4 "a_position")
    (h/main (h/assign "gl_Position" "a_position"))))

(def fragment-shader-source
  (str
    "#version 300 es\n"
    h/pre-medp-float
    (h/out-vec4 "outColor")
    (-> (h/assign "outColor" (h/vec4 1 0 0.5 1))
        (h/main))))

(println fragment-shader-source)
(println vertex-shader-source)


;;create functions

;;creating shader func
(defn create-shader [ctx enum source]
  (let [shader (gl/create-shader ctx enum)]
    (gl/shader-source ctx shader source)
    (gl/compile-shader ctx shader)
    (if-not (gl/get-shader-parameter ctx shader c/COMPILE_STATUS)
      (do
        (js/alert (str "couldn't compile shader " (gl/get-shader-info-log ctx shader)))
        (gl/delete-shader ctx shader)
        nil)
      shader)))

;;creating program func
(defn create-program [ctx v f]
  (let [program (gl/create-program ctx)]
    (gl/attach-shader ctx program v)
    (gl/attach-shader ctx program f)
    (gl/link-program ctx program)
    (let [success (gl/get-program-parameter ctx program c/LINK_STATUS)]
      (if success
        program
        ;;not success delete program
        (gl/delete-program ctx program)))))

;;instantiating shaders
(defonce vertex-shader (create-shader ctx c/VERTEX_SHADER vertex-shader-source))
(defonce fragment-shader (create-shader ctx c/FRAGMENT_SHADER fragment-shader-source))
;;add shaders to a created program
(defonce program (create-program ctx vertex-shader fragment-shader))

;;applying data to our GLSL programs/shaders

(defonce position-attribute-location (gl/get-attrib-location ctx program "a_position"))
;;attributes get data from buffer so we create a buffer

(defonce position-buffer (gl/create-buffer ctx))

;;gl.ARRAY_BUFFER is a bind point, it's like a global variable in webgl
;;so we bind this to the global variable named ARRAY_BUFFER
(gl/bind-buffer ctx c/ARRAY_BUFFER position-buffer)

(defonce positions
  [0 0
   0 0.5
   0.7 0])


;;fill data to the position-buffer via ARRAY_BUFFER binding point
;;gl.STATIC_DRAW tells WebGL we are not likely to change this data much.
;; for optimization
(gl/buffer-data ctx c/ARRAY_BUFFER (js/Float32Array. positions) c/STATIC_DRAW)

;;no we have put the data we need to tell the attribute how to get data out of it
;;createing a collection of attribute state called a Vertex array object

(defonce vao (gl/create-vertex-array ctx))
;;and we need to bind to webgl global variable/ binding-point

(gl/bind-vertex-array ctx vao)
;;most enable or attribute will have a constant value
(gl/enable-vertex-attrib-array ctx position-attribute-location)

;;specifying how to extract the data

;;2 components per iteration
(defonce size 2)
;(defonce type c/FLOAT)
(defonce normalize false)
(defonce stride 0) ;;0 = move forward size * sizeof(type) each iteration to get the next position)
(defonce offset 0) ;;start at the beginning of the buffer

(gl/vertex-attrib-pointer ctx position-attribute-location size c/FLOAT normalize stride offset)


;A hidden part of gl.vertexAttribPointer is that it binds the current ARRAY_BUFFER to the attribute.
;In other words now this attribute is bound to positionBuffer.
;That means we're free to bind something else to the ARRAY_BUFFER bind point.
;The attribute will continue to use positionBuffer.
;Note that from the point of view of our GLSL vertex shader the a_position attribute is a vec4

(gl/viewport ctx 0 0 400 400)
(gl/clear ctx c/COLOR_BUFFER_BIT)
(gl/use-program ctx program)
;Then we need to tell it which set of buffers
;use and how to pull data out of those buffers to supply to the attributes
(gl/bind-vertex-array ctx vao)
(gl/draw-arrays ctx c/TRIANGLES 0 3)
(defn run []
  (if (gl/not-nil ctx)
    (println "webgl on")
    (println "not on")))
