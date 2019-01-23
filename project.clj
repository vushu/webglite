(defproject webglite "0.1"
  :description "A minimal sample full-stack Clojure(Script) website"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [cljsjs/gl-matrix "2.3.0-jenanwise-0"]
                 [cljsjs/three "0.0.91-1"]
                 ]
  :plugins [[cider/cider-nrepl "0.18.0"]]
  :profiles {:dev
             {:dependencies [[org.clojure/clojurescript "1.10.339"]
                             [com.bhauman/figwheel-main "0.2.0"]
                             [cider/piggieback "0.3.10"]]
              :resource-paths ["target"]
              :clean-targets ^{:protect false} ["target"]
              :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}})
