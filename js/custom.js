(function($) {
	"use strict";
	$('.nav_toggle').on('click', function(){
		$(".navigation_menu").toggleClass("menu_open");
		$(this).toggleClass("close_toggle");
	});
	//dropdown menu
	$(".navigation_menu ul li ul.sub_menu").parents("li").addClass("dropdown_toggle");
	$(".dropdown_toggle").append("<span class='caret_down'></span>");
	$(".navigation_menu ul li").children(".caret_down").on("click",function(){
		$(this).toggleClass("caret_up");
		$(this).prev("ul").slideToggle();
	});
	$(".megamenu_wrapper").parents("li").addClass("mega_dropdown");
	$(".mega_dropdown > a").append("<span class='mega_toggle'><i class='fa fa-angle-down'></span>");
	
	//mega menu js script
	var win_w = $(window).outerWidth();
	if(win_w < 992){
		$(".mega_dropdown").on('click', function(){
			$(this).children(".megamenu_wrapper").slideToggle(300);
		});
	}
	//fix header on scroll
	var win_scroll = $(window).scrollTop();
	$(window).on('bind scroll', function(e) {
		if ($(window).scrollTop() > 300) {
			$('.navigation_header').addClass('fixed_menu');
		} else {
			$('.navigation_header').removeClass('fixed_menu');
		}	
	}); 
	//slider
	$(".main_slider").owlCarousel({
		singleItem:true,
		items:1,
		loop:true,
		margin:0,
		autoplay:false,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:true,
		nav:false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
    //slider
	$(".testimonial_slider").owlCarousel({
		singleItem:true,
		items:1,
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:true,
		nav:false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
	//content slider
	$(".gallery_slider").owlCarousel({
		items:5,
		loop:false,
		margin:15,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:false,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1
			},
			550 : {
				items: 2
			},
			960 : {
				items:3
			},
			1200 : {
				items: 5
			},
		}
	});
	//popup gallery js
	$('.content_thumb_gallery').magnificPopup({
		delegate: '.gallery_icon',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'my_zoom_in',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	//video popup
	$('.video_p_icon').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'my_zoom_in youtube_video',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	//popup gallery js
	$('.pdf_gallery').magnificPopup({
		delegate: '.gallery_icon',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'my_zoom_in',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	//popup gallery js
	$('.gallery_popup').magnificPopup({
		delegate: '.gallery_icon',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'my_zoom_in',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: false,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	//onclick popup js
	$('.popup_icon').on('click', function() {
		$('.popup_wrapper').removeClass("open_popup");
		var popup_show = $(this).attr('data-show');
		$('#'+ popup_show).addClass("open_popup");	
	});
	$('.popup_wrapper').on('click', function(){
		$(this).removeClass("open_popup");
	});
	$('.close_btn').on('click', function(){
		$('.popup_wrapper').removeClass("open_popup");
	});
	$('.popup_inner_content').on('click', function(e){
		e.stopPropagation();
	});	
	//load event
	$(window).on('load', function() {
		$(".ayu_loader").delay(600).fadeOut("slow");
		//slider full height
		var hdr_h = $('.navigation_header').outerHeight();
		var win_h = $(window).outerHeight();
		var main_hh = win_h-hdr_h
		$('.slider_item').css('height',main_hh);
	});
	//add class on focus in label
	$('.input').focus(function(){
		$(this).parents('.form_group').addClass('focused');
	});
	//Remove class on focus in label
	$('.input').blur(function(){
		var inputValue = $(this).val();
		if ( inputValue == "" ) {
			$(this).parents('.form_group').removeClass('focused');  
		} 
	});
	//tabs Menu
	$('.tabs_menu > li').on('click', function(){
		var tab_data = $(this).attr("data-tab");
		$('.tabs_menu > li').removeClass("active");
		$(this).addClass("active");	
		$(".tab_content").removeClass("active");
		$("#"+tab_data).addClass("active");
	});
	//accordion js
	$(".accordion_heading").on("click", function(){
		$(this).toggleClass("active");
		$(this).next(".accordion_content").slideToggle(250);
		//$(".ac_heading").not(this).next().slideUp(100);
		//$(".ac_heading").not(this).removeClass("active");
	});
})(jQuery);