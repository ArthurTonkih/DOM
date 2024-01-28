document.addEventListener('DOMContentLoaded', function() {
    var pos = 0;
    var num = 0;
    document.querySelectorAll('.item')[num].classList.add('active');

    document.querySelector('.left').addEventListener('click', function() {
        if (pos === 0) {
            pos = -200;
            num = 2;
        } else {
            pos += 100;
            num -= 1;
        }
        document.querySelector('.img').style.transform = 'translate3d(' + pos + '%,0,0)';
        document.querySelectorAll('.item').forEach(function(item) {
            item.classList.remove('active');
        });
        document.querySelectorAll('.item')[num].classList.add('active');
    });

    document.querySelector('.right').addEventListener('click', function() {
        if (pos === -200) {
            pos = 0;
            num = 0;
        } else {
            pos -= 100;
            num += 1;
        }
        document.querySelector('.img').style.transform = 'translate3d(' + pos + '%,0,0)';
        document.querySelectorAll('.item').forEach(function(item) {
            item.classList.remove('active');
        });
        document.querySelectorAll('.item')[num].classList.add('active');
    });

    $('.item').click(function(){
		num=$('.item').index(this)
		pos=num*(-100)
		$('.img').css('transform', 'translate3d('+pos+'%,0,0)')
		$('.item').removeClass('active')
		$('.item').eq(num).addClass('active')
	})
    move();

    function move() {
        if (!document.querySelector('.img').matches(':hover')) {
            if (pos === -200) {
                pos = 0;
                num = 0;
            } else {
                pos -= 100;
                num += 1;
            }
			$('.img').css('transform', 'translate3d('+pos+'%,0,0)')
			$('.item').removeClass('active')
			$('.item').eq(num).addClass('active')
			setTimeout(move, 4000)
		 } else {
			function check() {
				if (!$('.slider').is(':hover')) {
				setTimeout(move, 2000)
				return
				} else {
					setTimeout(check, 1000)
				}
			}
			check() 
			return
		}
	
	}
	})