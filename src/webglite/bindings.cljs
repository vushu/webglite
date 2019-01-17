(ns webglite.bindings)

(defn create-canvas [width height]
  (let [canvas (.createElement js/document "CANVAS")
        body (get (.getElementsByTagName js/document "body") 0)]
    (set! (.-width canvas) width)
    (set! (.-height canvas) height)
    (set! (.-zIndex (.-style canvas)) 8)
    ;(.-posistion .-style canvas "absolute")
    (set! (.-border (.-style canvas)) "1px solid")
    (.appendChild (.-body js/document) canvas)))

(defonce context (atom {}))

(defn get-context [canvas gltype]
    (swap! context assoc :gl (.getContext canvas gltype)))

(defn not-nil []
  (some? (@context :gl)))

(defn create-shader
  "type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER."
  [type]
  (.createShader (@context :gl) type))

(defn clear-color [r g b a]
  (.clearColor (@context :gl) r g b a))

(defn clear [glenum]
  (.clear (@context :gl) glenum))

(defn viewport [x y width height]
  (.viewport (@context :gl) x y width height))

(defn shader-source
  "shader A WebGLShader object in which to set the source code.
   source DOMString containing the GLSL source code to set."
  [source code]
  (.shaderSource (@context :gl) source code))

(defn compile-shader
  "shader A fragment or vertex WebGLShader."
  [shader]
  (.compileShader (@context :gl) shader))

(defn get-shader-info-log
  "Return the info log of the shader"
  [shader]
  (.getShaderInfoLog shader))

(defn get-program-info-log [program]
  (.getProgramInfoLog (@context :gl) program))

(defn get-program-parameter [program glenum]
  (.getProgramParameter (@context :gl) glenum))

(defn get-shader-parameter [shader glenum]
  (.getShaderParameter (@context :gl) shader glenum))

(defn delete-shader
  "does as it says"
  [shader]
  (.deleteShader shader))

(defn create-program
  []
  (.createProgram (@context :gl)))

(defn attach-shader
  [program shader]
  (.attachShader (@context :gl) program shader))

(defn link-program
  [program]
  (.linkProgram (@context :gl) program))

(defn delete-program
  [program]
  (.deleteProgram (@context :gl) program))

(defn get-attrib-location
  [program attribute]
  (.getAttribLocation (@context :gl) program attribute))

(defn uniform4fv [attribute rgba]
  (.uniform4fv (@context :gl) attribute rgba))

(defn create-buffer
  []
  (.createBuffer (@context :gl)))

(defn bind-buffer
  [array-buffer position-buffer]
  (.bindBuffer (@context :gl) array-buffer position-buffer))

(defn buffer-data
  "example in javascript:
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);"
  [array-buffer positions gl-enum]
  (.bufferData (@context :gl) array-buffer positions gl-enum))

(defn create-vertex-array []
  (.createVertexArray (@context :gl)))

(defn bind-vertex-array [vertex-array]
  (.bindVertexArray (@context :gl) vertex-array))

(defn enable-vertex-attrib-array
  [position-attribute-location]
  (.enableVertexAttribArray (@context :gl) position-attribute-location))

(defn vertex-attrib-pointer
  [attribute-location size type normalize stride offset]
  (.vertexAttribPointer (@context :gl) attribute-location size type normalize stride offset))

(defn use-program [program]
  (.useProgram (@context :gl) program))

(defn uniform2f [resolution-uniform-location width height]
  (.uniform2f (@context :gl) resolution-uniform-location width height))

(defn draw-arrays [primitive-type offset count]
  (.drawArrays (@context :gl) primitive-type offset count))

(defn get-uniform-location [program attribute]
  (.getUniformLocation (@context :gl) program attribute))

;;GL types

(defn float []
  (.-FLOAT (@context :gl)))

;;GLEnums

(defn array-buffer []
  (.-ARRAY_BUFFER (@context :gl)))

(defn vertex-shader []
  (.-VERTEX_SHADER (@context :gl)))

(defn fragment-shader []
  (.-FRAGMENT_SHADER (@context :gl)))

(defn color-buffer-bit []
  (.-COLOR_BUFFER_BIT (@context :gl)))

(defn triangles []
  (.-TRIANGLES (@context :gl)))

(defn static-draw []
  (.-STATIC_DRAW (@context :gl)))

(defn dynamic-draw []
  (.-DYNAMIC_DRAW (@context :gl)))

(defn stream_draw []
  (.-STREAM_DRAW (@context :gl)))

(defn static-read []
  (.-STATIC_READ (@context :gl)))

(defn stream_read []
  (.-STREAM_READ (@context :gl)))

(defn static-copy []
  (.-STATIC_COPY (@context :gl)))

(defn dynamic-copy []
  (.-DYNAMIC_COPY (@context :gl)))

(defn stream_copy []
  (.-STREAM_COPY (@context :gl)))

(defn link-status []
  (.-LINK_STATUS (@context :gl)))

(defn compile-status []
  (.-COMPILE_STATUS (@context :gl)))
