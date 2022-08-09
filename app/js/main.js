$(function () {

   $('.products__slider').slick({
      infinite: false,
      prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
      nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>'
   });

   $('.questions__item-title').on('click', function (event) {

      $('.questions__item').removeClass('questions__item--active');
      $(this).parent().addClass('questions__item--active');

   })

   $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
      sectionSelector: '.page-section'
	});

});

//<img src="images/arrow-left.svg" alt="arrow-left svg">
//<img src="images/arrow-right.svg" alt="arrow-right svg">