/* ==============================================
	Если страницы загружена со скроллом
=============================================== */
var scrollTop = function() {
	if ($(this).scrollTop() > 1) {
		$('nav').addClass('sticky');
	}
};

//$(document).ready(scrollTop);

/* ======================================================
	Движение верхнего меню с прокруткой страницы
======================================================= */
var sticky = function() {
	$(window).scroll(function() {
		var height = $("div.top").innerHeight();
		if($(this).scrollTop() >= height){
			$('body').addClass('sticky');
		}
		else{
			$('body').removeClass('sticky');
		}
	});
};

$(document).ready(sticky);

/* ======================================================
	Мобильное боковое меню
======================================================= */
var mobileMenu = function() {

	$("body").on("click", ".open-menu", function(e){
		e.preventDefault();

		$('body').addClass('is-open');
	});

	$("body").on("click", ".close-menu", function(e){
		e.preventDefault();

		$('body').removeClass('is-open');
	});

	$("body").on("click", ".open-submenu.plus", function(e){
		e.preventDefault();

		$(this).next().show();
		$(this).addClass('minus');
		$(this).removeClass('plus');
	});

	$("body").on("click", ".open-submenu.minus", function(e){
		e.preventDefault();

		$(this).next().hide();
		$(this).addClass('plus');
		$(this).removeClass('minus');
	});

};

$(document).ready(mobileMenu);

/* ======================================================
	Кнопка наверх
======================================================= */
var toTop = function() {
	$('#toTop').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
};

//$(document).ready(toTop);

/* ======================================================
	Owl карусель (сдайдер в верхней части сайта)
======================================================= */
var slider = function() {
	$('.slider-list').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			}
		}
	});
};

$(document).ready(slider);

/* ======================================================
	Открытие видео во всплывающем окошке
======================================================= */
var video = function() {
	$(document).ready(function() {
		var $videoSrc;  
		$('.video-btn').click(function() {
			$videoSrc = $(this).data( "src" );
		});

		$('#videoModal').on('shown.bs.modal', function (e) {
			$("#video").html('<iframe class="embed-responsive-item" src="' + $videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0" allowscriptaccess="always" allow="autoplay" allowfullscreen></iframe>');
		});

		$('#videoModal').on('hide.bs.modal', function (e) {
			$("#video").html('');
		});
	});	
};

$(document).ready(video);

