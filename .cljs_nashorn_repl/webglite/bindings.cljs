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

(defn get-context [canvas gltype]
    (reset! gl (.getContext canvas gltype)))

(defn not-nil []
  (some? @gl))

(defn create-shader
  "type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER."
  [type]
  (.createShader @gl type))

(defn clear-color [r g b a]
  (.clearColor @gl r g b a))

(defn clear [glenum]
  (.clear @gl glenum))

(defn viewport [x y width height]
  (.viewport @gl x y width height))

(defn shader-source
  "shader A WebGLShader object in which to set the source code.
   source DOMString containing the GLSL source code to set."
  [source code]
  (.shaderSource @gl source code))

(defn compile-shader
  "shader A fragment or vertex WebGLShader."
  [shader]
  (.compileShader @gl shader))

(defn get-shader-info-log
  "Return the info log of the shader"
  [shader]
  (.getShaderInfoLog shader))

(defn get-program-info-log [program]
  (.getProgramInfoLog @gl program))

(defn get-program-parameter [program glenum]
  (.getProgramParameter @gl program glenum))

(defn get-shader-parameter [shader glenum]
  (.getShaderParameter @gl shader glenum))

(defn delete-shader
  "does as it says"
  [shader]
  (.deleteShader shader))

(defn create-program
  []
  (.createProgram @gl))

(defn attach-shader
  [program shader]
  (.attachShader @gl program shader))

(defn link-program
  [program]
  (.linkProgram @gl program))

(defn delete-program
  [program]
  (.deleteProgram @gl program))

(defn get-attrib-location
  [program attribute]
  (.getAttribLocation @gl program attribute))

(defn uniform4fv [attribute rgba]
  (.uniform4fv @gl attribute rgba))

(defn create-buffer
  []
  (.createBuffer @gl))

(defn bind-buffer
  [array-buffer position-buffer]
  (.bindBuffer @gl array-buffer position-buffer))

(defn buffer-data
  "example in javascript:
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);"
  [array-buffer positions gl-enum]
  (.bufferData @gl array-buffer positions gl-enum))

(defn create-vertex-array []
  (.createVertexArray @gl))

(defn bind-vertex-array [vertex-array]
  (.bindVertexArray @gl vertex-array))

(defn enable-vertex-attrib-array
  [position-attribute-location]
  (.enableVertexAttribArray @gl position-attribute-location))

(defn vertex-attrib-pointer
  [attribute-location size type normalize stride offset]
  (.vertexAttribPointer @gl attribute-location size type normalize stride offset))

(defn use-program [program]
  (.useProgram @gl program))

(defn uniform2f [resolution-uniform-location width height]
  (.uniform2f @gl resolution-uniform-location width height))

(defn draw-arrays [primitive-type offset count]
  (.drawArrays @gl primitive-type offset count))

(defn get-uniform-location [program attribute]
  (.getUniformLocation @gl program attribute))


(defn clear-depth [value]
  (.clearDepth @gl value))

(defn enable [glenum]
  (.enable @gl glenum))

(defn depth-func [glenum]
  (.depthFunc @gl glenum))

;;GL types

(defn float []
  (.-FLOAT @gl))

;;GLEnums

(defn lequal []
  (.-LEQUAL @gl))

(defn depth-test []
  (.-DEPTH_TEST @gl))

(defn depth-buffer-bit []
  (.-DEPTH_BUFFER_BIT @gl))

(defn array-buffer []
  (.-ARRAY_BUFFER @gl))

(defn vertex-shader []
  (.-VERTEX_SHADER @gl))

(defn fragment-shader []
  (.-FRAGMENT_SHADER @gl))

(defn color-buffer-bit []
  (.-COLOR_BUFFER_BIT @gl))

(defn triangles []
  (.-TRIANGLES @gl))

(defn static-draw []
  (.-STATIC_DRAW @gl))

(defn dynamic-draw []
  (.-DYNAMIC_DRAW @gl))

(defn stream_draw []
  (.-STREAM_DRAW @gl))

(defn static-read []
  (.-STATIC_READ @gl))

(defn stream_read []
  (.-STREAM_READ @gl))

(defn static-copy []
  (.-STATIC_COPY @gl))

(defn dynamic-copy []
  (.-DYNAMIC_COPY @gl))

(defn stream_copy []
  (.-STREAM_COPY @gl))

(defn link-status []
  (.-LINK_STATUS @gl))

(defn compile-status []
  (.-COMPILE_STATUS @gl))


