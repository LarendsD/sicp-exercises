(define (sqr x) (* x x))

(define (average x y)
  (/(+ x (* 2 y)) 3))

(define (improve guess x)
  (average (/ x (sqr guess)) guess))

(define (good-enough? guess x)
  (< (abs (- guess x)) 0.0000001))

(define (sqrt-iter guess x)
  (if (good-enough? guess (improve guess x))
      guess
      (sqrt-iter (improve guess x) x)))

(define (cube-root x)
  (sqrt-iter 1.0 x))