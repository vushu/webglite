(ns vutetris.core)

(defn createCanvas [width height]
  (let [canvas (.createElement js/document "CANVAS")
        body (get (.getElementsByTagName js/document "body") 0)]
    (set! (.-width canvas) width)
    (set! (.-height canvas) height)
    (set! (.-zIndex (.-style canvas)) 8)
    ;(.-posistion .-style canvas "absolute")
    (set! (.-border (.-style canvas)) "1px solid")
    (.appendChild (.-body js/document) canvas)))

(defn getContext [canvas]
  (.-getContext canvas))


