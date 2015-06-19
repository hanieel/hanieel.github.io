jQuery(document).ready(function($){

	// Tabbed panel widget
	$(function() {
    	$("#tabs").tabs({fx: {opacity: 'toggle'}});
    });

	//Main Nav Menu
	 //$('#horz-nav ul#menu-page-nav li.menu-item-has-children').hover(
		  //function () {
			//$('ul.sub-menu', this).stop().slideDown(300);
		  //},
		  //function () {
			//$('ul.sub-menu', this).stop().slideUp(300);
		  //}
		//);


//Top Nav Menu
	   $('#horz-nav ul#menu-page-nav li.menu-item-has-children').hover(
		  function () {
			$('ul.sub-menu').stop().slideDown(400, function() {
				$( this )
				  .css( "height", "auto" )
				  //.css( "float", "left" )	
				});
		  },
		  function () {
			$('ul.sub-menu').stop().slideUp(400);
		  }
		);


		
		
	  //Fly Out Menu 
	   $('ul#menu-flyout-menu li.menu-item-has-children').hover(
		function () {
		  $('ul.sub-menu', this).stop().slideDown(400);
		  $(this).addClass('show');
		},
		function () {
		  $('ul.sub-menu', this).stop().slideUp(400);
		  $(this).removeClass('show');
		}
	  );

	   $('.btn-label, .close, .overlay').click(function() {
			$('.btn-label').toggleClass('off');
			$('#header_banner, .btn-label, .close, .lp_wrapper').toggleClass('pos');
			$('#flyout_menu_container').toggleClass('scrollLock'); 
	   });
		

		//tiles - thumbnail hover
	   $('.tile_content').hover(
		  function () {
			 $(this).children('.tile_content .tile_info').addClass('active');
			
		  },
		  function () {
			$(this).children('.tile_content .tile_info').removeClass('active');
		  }
		);	 


   //SECTION: HEADER				  
		  if($('.slider').hasClass('cycle-slideshow')) {
		  		  console.log('HELLO it should work!!!!');
		  		  $('.slider').attr('data-cycle--swipe-fx', 'scrollHorz');
				  $('.slider').attr('data-cycle-swipe', 'true');

				  //$('.slider').attr('data-cycle-fx', 'scrollHorz');
				  $('.slider').attr('data-cycle-timeout', '0');
				  $('.slider').attr('data-cycle-prev', '.prev.slides_nav');
				  $('.slider').attr('data-cycle-next', '.next.slides_nav');
				  $('.slider').attr('data-cycle-pager', '.cycle-pager.slides_nav');
				  //$('.slider').attr('data-cycle-pager-template', '<a class="cycle-pager" href=#> {{slideNum}} </a>');
				  $('.slider').attr('data-cycle-slides', '> div ');
				  $('.slider').attr('data-cycle-auto-height', 'container');
				  
				  //$('.slider.cycle-slideshow').on('cycle-update-view', function (e, optionHash, slideOptionsHash, currSlideEl) {
				  //$('.cycle-pager.slides_nav').text((optionHash.currSlide + 1) + ' / ' + (optionHash.slideCount));
				//});
		  }	

		  $(window).on('load', function() {
			   var wi = $(window).width();  
				 if($(window).width() <= 666){
					
					 $('.cycle-pager').css('display', 'block');
		 
				 } else {
					 
					
					 $('.cycle-pager').css('display', 'none');	
				 };
				 
				 $(window).resize(function() {
					var wi = $(window).width();
			 
					if (wi <= 666){
						
						$('.cycle-pager').css('display', 'block');

					} else {
						
						
						$('.cycle-pager').css('display', 'none');	
					};
				 }); 
		   });
   


			


		  //SECTION: TABS SLIDER				  
		  if($('.slider2').hasClass('cycle-slideshow')) {
		  			
				  $('.slider2').attr('data-cycle-fx', 'carousel');
				  $('.slider2').attr('data-cycle-carousel', 'visible=3');
				  $('.slider2').attr('data-cycle-timeout', '0');
				  $('.slider2').attr('data-allow-wrap', 'true');
				  $('.slider2').attr('data-cycle-prev', '.prev.slides2_nav');
				  $('.slider2').attr('data-cycle-next', '.next.slides2_nav');
				  $('.slider2').attr('data-cycle-pager', '.cycle-pager.slides2_nav');
				  //$('.slider2').attr('data-cycle-pager-template', '<a class="cycle-pager" href=#> {{slideNum}} </a>');
				  $('.slider2').attr('data-cycle-slides', '> div ');
				  $('.slider2').attr('data-cycle-auto-height', 'container');
				  
				  //$('.slider2.cycle-slideshow').on('cycle-update-view', function (e, optionHash, slideOptionsHash, currSlideEl) {
				  //$('.cycle-pager.slides2_nav').text((optionHash.currSlide + 1) + ' / ' + (optionHash.slideCount));
				//});
		  }	

		   //SECTION: TABS SLIDER 2				  
		  if($('.slider3').hasClass('cycle-slideshow')) {

				  $('.slider3').attr('data-cycle-fx', 'carousel');
				  $('.slider3').attr('data-cycle-carousel', 'visible=3');
				  $('.slider3').attr('data-cycle-timeout', '0');
				  $('.slider3').attr('data-allow-wrap', 'true');
				  $('.slider3').attr('data-cycle-prev', '.prev.slides3_nav');
				  $('.slider3').attr('data-cycle-next', '.next.slides3_nav');
				  $('.slider3').attr('data-cycle-pager', '.cycle-pager.slides3_nav');
				  //$('.slider3').attr('data-cycle-pager-template', '<a class="cycle-pager" href=#> {{slideNum}} </a>');
				  $('.slider3').attr('data-cycle-slides', '> div ');
				  $('.slider3').attr('data-cycle-auto-height', 'container');
				  
				  //$('.slider3.cycle-slideshow').on('cycle-update-view', function (e, optionHash, slideOptionsHash, currSlideEl) {
				  //$('.cycle-pager.slides3_nav').text((optionHash.currSlide + 1) + ' / ' + (optionHash.slideCount));
				//});
		  }	

		   //SECTION: TABS SLIDER 3				  
		  if($('.slider4').hasClass('cycle-slideshow')) {

				  $('.slider4').attr('data-cycle-fx', 'carousel');
				  $('.slider4').attr('data-cycle-carousel', 'visible=3');
				  $('.slider4').attr('data-cycle-timeout', '0');
				  $('.slider4').attr('data-allow-wrap', 'true');
				  $('.slider4').attr('data-cycle-prev', '.prev.slides4_nav');
				  $('.slider4').attr('data-cycle-next', '.next.slides4_nav');
				  $('.slider4').attr('data-cycle-pager', '.cycle-pager.slides4_nav');
				  //$('.slider4').attr('data-cycle-pager-template', '<a class="cycle-pager" href=#> {{slideNum}} </a>');
				  $('.slider4').attr('data-cycle-slides', '> div ');
				  $('.slider4').attr('data-cycle-auto-height', 'container');
				  
				  //$('.slider4.cycle-slideshow').on('cycle-update-view', function (e, optionHash, slideOptionsHash, currSlideEl) {
				  //$('.cycle-pager.slides4_nav').text((optionHash.currSlide + 1) + ' / ' + (optionHash.slideCount));
				//});
		  }	





























});//End Doc ready







