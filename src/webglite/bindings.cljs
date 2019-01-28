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
    (.getContext canvas gltype))

(defn not-nil [gl]
  (some? gl))

(defn create-shader
  "type Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER."
  [gl type]
  (.createShader gl type))

(defn clear-color [gl r g b a]
  (.clearColor gl r g b a))

(defn clear [gl glenum]
  (.clear gl glenum))

(defn viewport [gl x y width height]
  (.viewport gl x y width height))

(defn shader-source
  "shader A WebGLShader object in which to set the source code.
   source DOMString containing the GLSL source code to set."
  [gl source code]
  (.shaderSource gl source code))

(defn compile-shader
  "shader A fragment or vertex WebGLShader."
  [gl shader]
  (.compileShader gl shader))

(defn get-shader-info-log
  "Return the info log of the shader"
  [gl shader]
  (.getShaderInfoLog shader))

(defn get-program-info-log [gl program]
  (.getProgramInfoLog gl program))

(defn get-program-parameter [gl program glenum]
  (.getProgramParameter gl program glenum))

(defn get-shader-parameter [gl shader glenum]
  (.getShaderParameter gl shader glenum))

(defn delete-shader
  "does as it says"
  [gl shader]
  (.deleteShader shader))

(defn create-program
  [gl]
  (.createProgram gl))

(defn attach-shader
  [gl program shader]
  (.attachShader gl program shader))

(defn link-program
  [gl program]
  (.linkProgram gl program))

(defn delete-program
  [gl program]
  (.deleteProgram gl program))

(defn get-attrib-location
  [gl program attribute]
  (.getAttribLocation gl program attribute))

(defn uniform4fv [gl attribute rgba]
  (.uniform4fv gl attribute rgba))

(defn create-buffer
  [gl]
  (.createBuffer gl))

(defn bind-buffer
  [gl array-buffer position-buffer]
  (.bindBuffer gl array-buffer position-buffer))

(defn buffer-data
  "example in javascript:
   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);"
  [gl array-buffer positions gl-enum]
  (.bufferData gl array-buffer positions gl-enum))

(defn create-vertex-array [gl]
  (.createVertexArray gl))

(defn bind-vertex-array [gl vertex-array]
  (.bindVertexArray gl vertex-array))

(defn enable-vertex-attrib-array
  [gl position-attribute-location]
  (.enableVertexAttribArray gl position-attribute-location))

(defn vertex-attrib-pointer
  [gl attribute-location size type normalize stride offset]
  (.vertexAttribPointer gl attribute-location size type normalize stride offset))

(defn use-program [gl program]
  (.useProgram gl program))

(defn uniform2f [gl resolution-uniform-location width height]
  (.uniform2f gl resolution-uniform-location width height))

(defn draw-arrays [gl primitive-type offset count]
  (.drawArrays gl primitive-type offset count))

(defn get-uniform-location [gl program attribute]
  (.getUniformLocation gl program attribute))


(defn clear-depth [gl value]
  (.clearDepth gl value))

(defn enable [gl glenum]
  (.enable gl glenum))

(defn depth-func [gl glenum]
  (.depthFunc gl glenum))

;;GL types

(defn float [gl]
  (.-FLOAT gl))

;;GLEnums

(defn lequal [gl]
  (.-LEQUAL gl))

(defn depth-test [gl]
  (.-DEPTH_TEST gl))

(defn depth-buffer-bit [gl]
  (.-DEPTH_BUFFER_BIT gl))

(defn array-buffer [gl]
  (.-ARRAY_BUFFER gl))

(defn vertex-shader [gl]
  (.-VERTEX_SHADER gl))

(defn fragment-shader [gl]
  (.-FRAGMENT_SHADER gl))

(defn color-buffer-bit [gl]
  (.-COLOR_BUFFER_BIT gl))

(defn triangles [gl]
  (.-TRIANGLES gl))

(defn static-draw [gl]
  (.-STATIC_DRAW gl))

(defn dynamic-draw [gl]
  (.-DYNAMIC_DRAW gl))

(defn stream_draw [gl]
  (.-STREAM_DRAW gl))

(defn static-read [gl]
  (.-STATIC_READ gl))

(defn stream_read [gl]
  (.-STREAM_READ gl))

(defn static-copy [gl]
  (.-STATIC_COPY gl))

(defn dynamic-copy [gl]
  (.-DYNAMIC_COPY gl))

(defn stream_copy [gl]
  (.-STREAM_COPY gl))

(defn link-status [gl]
  (.-LINK_STATUS gl))

(defn compile-status [gl]
  (.-COMPILE_STATUS gl))


