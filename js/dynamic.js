function screen() {
	var h = $(window).height()-$('header').height();
	if ( h < 600 ) {
		h = 600;
	}
	$('.screen').height(h);
	if ( $('.screen').hasClass('introduction') ) {
		$('.screen .core').css({
			'margin-top': -$('.screen .core').outerHeight()/2+2+'px'
		});
	}
	if ( $('.screen').hasClass('courses-ege') ) {
		$('.screen .core').css({
			'margin-top': -$('.screen .core').outerHeight()/2-48+'px'
		});
	}
	if ( $('.screen').hasClass('courses-maths') ) {
		$('.screen .core').css({
			'margin-top': -$('.screen .core').outerHeight()/2-38+'px'
		});
	}
}
$(document).ready(function() {
	if ( $('.benefits').length > 0 ) {
		$('.benefits .teachers > div').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.benefits .teachers > div').bind('swipeleft', function() {
			$('.benefits .teachers .jcarousel-next').trigger('click');
		});
		$('.benefits .teachers > div').bind('swiperight', function() {
			$('.benefits .teachers .jcarousel-prev').trigger('click');
		});
	}
	$('.benefits .nav li a').bind('click', function(event) {
		$(this).parents('.benefits').find('.tab[data-tab="'+$(this).attr('href')+'"]').show().siblings('.tab').hide();
		$(this).parent().addClass('active').siblings().removeClass('active');
		event.preventDefault();
	}).filter(':first').click();
	$('footer .contacts h6').bind('click', function(event) {
		$('.subway-select').css({
			'top': $(this).position().top+$('footer').offset().top+'px'
		}).stop(true,true).fadeIn(200);
		event.stopPropagation();
	});
	$('.subway-select ul li').bind('click', function(event) {
		$('footer .contacts h6 span').text($(this).text());
		$('footer .contacts p').html($(this).attr('data-address'));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.subway-select').stop(true,true).fadeOut(200);
		event.preventDefault();
	}).filter(':first').click();
	$('footer .contacts h6').one('click', function(event) {
		$('.subway-select > div').jScrollPane();
		event.preventDefault();
	});
	$('header .phone h6').bind('click', function(event) {
		$('.call-order').css({
			'top': $(this).position().top+'px'
		}).stop(true,true).fadeIn(200);
		event.stopPropagation();
	});
	if ( $('.call-order').length > 0 ) {
		$('.call-order').append('<span class="close"></span>');
		$('input.phone-mask').inputmask({
			mask: '+7 (999) 999-99-99',
			showMaskOnHover: false
		});
	}
	if ( $('nav > ul > li  > ul').length > 0 ) {
		$('nav > ul > li  > ul').append('<span class="close"></span>');
	}
	$('.call-order .close').bind('click', function(event) {
		$(this).parent().stop(true,true).fadeOut(200);
		event.preventDefault();
	});
	$('.subway-select, .call-order').bind('click', function(event) {
		event.stopPropagation();
	});
	$('nav > ul > li.sub > a').bind('click', function(event) {
		$(this).parent().children('ul').stop(true,true).slideDown(200);
		$(this).parent().addClass('current');
		event.preventDefault();
		event.stopPropagation();
	});
	$('nav > ul > li > ul .close').bind('click', function(event) {
		$(this).parent('ul').stop(true,true).slideUp(200);
		$(this).parents('li').removeClass('current');
		event.stopPropagation();
	});
	$('header .branch h4').bind('click', function(event) {
		$('.filial-m').stop(true,true).slideDown(200);
		event.preventDefault();
	});
	$('.filial-m h5').bind('click', function(event) {
		$('.filial-m').stop(true,true).slideUp(200);
		event.preventDefault();
	});
	$('html').click(function(event) {
		$('.subway-select, .call-order').stop(true,true).fadeOut(200);
		$('nav > ul > li > ul').stop(true,true).slideUp(200);
		$('nav > ul > li').removeClass('current');
		event.preventDefault();
	});
	$('.teachers-b ul li > div').hover(
		function() {
			$(this).find('a').stop(true,true).fadeIn(200);
			$(this).find('div').css({
				'margin-top': -$(this).find('div').outerHeight()/2+1+'px'
			});
		},
		function() {
			$(this).find('a').stop(true,true).fadeOut(200);
		}
	);
	$('.video-b .rb .form .nav ul li a').bind('click', function(event) {
		$(this).parents('.form').find('.tab[data-tab="'+$(this).attr('href')+'"]').show().siblings('.tab').hide();
		$(this).parent().addClass('active').siblings().removeClass('active');
		event.preventDefault();
	}).filter(':first').click();
	if ( $('input[type="radio"]') ) {
		$('input[type="radio"]').uniform();
	}
	if ( $('input[type="checkbox"]') ) {
		$('input[type="checkbox"]').uniform();
	}
	if ( $('select') ) {
		$('select').selectbox();
	}
	$(window).bind('scroll', function() {
		if ( $(window).scrollTop() > 98 ) {
			$('nav').addClass('fixed');
		}
		else {
			$('nav').removeClass('fixed');
		}
	})
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
	if ( $('.scheme-b').length > 0 ) {
		$('.scheme-b .gallery').jcarousel({
			scroll: 1,
			animation: 500,
			easing: 'easeInOutQuad',
			wrap: 'circular'
		});
		$('.scheme-b .jcarousel-container').bind('swipeleft', function() {
			$('.scheme-b .jcarousel-next').trigger('click');
		});
		$('.scheme-b .jcarousel-container').bind('swiperight', function() {
			$('.scheme-b .jcarousel-prev').trigger('click');
		});
		$('.scheme-b').append('<span class="close"></span>');
	}
	if ( $('.screen').length > 0 ) {
		screen();
		var lastScrollTop = 0;
		$(window).scroll(function(event) {
			var st = $(this).scrollTop();
			if ( $(window).scrollTop() > 20 && $(window).scrollTop() < $(window).height()-20 ) {
				if (st > lastScrollTop){
					$('body, html').stop().animate({
						scrollTop: $(window).height()+'px'
					}, 200);
				} else {
					$('body, html').stop().animate({
						scrollTop: '0'
					}, 200);
				}
			}
			lastScrollTop = st;
		});
		$('.screen .core button').bind('click', function(event) {
			$('body, html').stop().animate({
				scrollTop: $('header').height()+$('.screen').height()+'px'
			}, 200);
			event.preventDefault();
		});
	}
	if ( $('.reviews').length > 0 ) {
		$('.reviews .nav').append('<span class="prev"></span>');
		$('.reviews .nav').append('<span class="next"></span>');
		$('.reviews .nav > div > div').bind('click', function(event) {
			var w = 80;
			var t = $('.reviews .nav > div');
			var c = $(this).attr('data-user');
			$(this).css({
				'right': 'auto',
				'left': '50%',
				'margin': '-10px 0 0 -40px'
			}).addClass('current').siblings().removeClass('current');
			for ( var i = 1; i <= 3; i++ ) {
				var x = eval(i)+eval(c);
				if ( x > 7 ) {
					x = eval(x)-7;
				}
				t.find('div[data-user="'+x+'"]').css({
					'left': 'auto',
					'right': (3-i)*w+'px',
					'margin': '0'
				});
			}
			for ( var i = -3; i <= -1; i++ ) {
				var x = eval(i)+eval(c);
				if ( x <= 0 ) {
					x = eval(x)+7;
				}
				t.find('div[data-user="'+x+'"]').css({
					'left': (i+3)*w+'px',
					'right': 'auto',
					'margin': '0'
				});
			}
			$('.reviews .core > div:nth-child('+c+'), .reviews .description > div:nth-child('+c+')').show().siblings().hide();
			event.preventDefault();
		});
		$('.reviews .nav > div > div[data-user="4"]').trigger('click');
		$('.reviews .nav .next').bind('click', function(event) {
			var t = eval($('.reviews .nav > div > div.current').attr('data-user'))+1;
			if ( t > 7 ) {
				t = 1;
			}
			$('.reviews .nav > div > div[data-user="'+t+'"]').trigger('click');
			event.preventDefault();
		});
		$('.reviews .nav .prev').bind('click', function(event) {
			var t = eval($('.reviews .nav > div > div.current').attr('data-user'))-1;
			if ( t < 1 ) {
				t = 7;
			}
			$('.reviews .nav > div > div[data-user="'+t+'"]').trigger('click');
			event.preventDefault();
		});
	}
	if ( $('.reviews').prev('.benefits').length > 0 ) {
		$('.reviews').css({
			'border-top': '1px solid #ebebeb'
		});
	}
});
$(window).load(function() {
	if ( $('.navigation').length > 0 ) {
		var max = 0;
		$('.navigation p').each(function() {
			var h = $(this).height(); 
			max = h > max ? h : max;
		});
		$('.navigation .prev, .navigation .next, .navigation').css({
			'height': max+32+'px',
			'visibility': 'visible'
		});
	}
	if ( $('.tariff').length > 0 ) {
		var max = 0;
		$('.tariff ul li p').each(function() {
			var h = $(this).height(); 
			max = h > max ? h : max;
		});
		$('.tariff ul li p').css({
			'height': max+'px',
			'visibility': 'visible'
		});
	}
});
$(window).resize(function() {
	if ( $('.screen').length > 0 ) {
		screen();
	}
});