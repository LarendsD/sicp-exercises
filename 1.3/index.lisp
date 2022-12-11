(define (square a) (* a a))
  
(define (>= a b) 
  (not (< a b)))
  
(define (sum-of-squares a b) (+ (square a) (square b)))
  
(define (solution a b c)
  (if (and (>= a c) (>= b c))
    (sum-of-squares a b)
      (if (and (>= b a) (>= c a))
        (sum-of-squares b c)
        (sum-of-squares a c)
      )
  )
)