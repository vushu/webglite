(ns webglite.glsh-helper)

(defn att-vec4 [name]
  (str "attribute vec4 " name ";"))

(defn vec4 [x y z v]
  (str "vec4(" x "," y "," z "," v ")"))

(defn uni-mat4 [name]
  (str "uniform mat4 " name ";"))

(defn mul [& args]
  (subs (clojure.string/join (map #(str " * " %) args)) 2))

(defn assign [name value]
  (str name " = " value ";"))

(defn main [code]
  (str
    "void main() {"
       code
       "}"))


