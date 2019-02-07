(ns webglite.canvas)

(defn width [gl]
  (.-width (.-canvas gl)))


(defn height [gl]
  (.-height (.-canvas gl)))
