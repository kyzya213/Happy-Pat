$(function() {
    $('.menu-open').click(function (e) {
        $('.menu').toggleClass('show-menu')
    })
    $('ul.menu li a').click(function (e) {
        e.preventDefault();
        $('.menu').removeClass('show-menu')
    });

		$('.owl-carousel').owlCarousel({
    	loop:true,
    	margin:0,
    	nav:true,
        dots:false,
        navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:1
        	},
        	1000:{
            	items:2
        	}
    	}
	});
        $('.katalog-open').click(function (e) {
            $('.menu-katalog').toggleClass('show-katalog')
    })
        $('ul.menu-katalog li a').click(function (e) {
            $('.menu-katalog').removeClass('show-katalog')
    });


     $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
 
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });    
});
