(
	define (f n)
 		(
  		if (< n 3)
     	n
     	(+ (f (- n 1)) (* 2 (f (- n 2))) (* 3 (f (- n 3))))
    )
)

(define (f-iter n)
	(define (f result iter)
  	(
			if (or (> iter 3) (< n 3))
      	result
        (f (+ result (* iter (- n iter))) (+ iter 1))
    )
  )
	(f 1 1)
)