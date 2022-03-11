$(document).ready(function(){
    $('.main-slider-box').slick({
        variableWidth: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000
    });
    $('.feedback-slider-wrap').slick({
        variableWidth: true,
        prevArrow: $('.slick-prev2'),
        nextArrow: $('.slick-next2'),
        dots: true,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 772,
              settings: {
                slidesToShow: 2
              }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.product-flexbox__big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-flexbox__small-slider'
      });
      $('.product-flexbox__small-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-flexbox__big-slider',
        centerMode: true,
        focusOnSelect: true,
        prevArrow: $('.slick-prev3'),
        nextArrow: $('.slick-next3')
      });
      $('.burger').on('click', function() {
          $('.header-top-row').addClass('active')
          $('.escape').addClass('active')
          $('html').addClass('scroll-lock')
      });
      $('.escape').on('click', function() {
        $('.header-top-row').removeClass('active')
        $('html').removeClass('scroll-lock')
        $('.escape').removeClass('active')
    });
    $('.btn-to-tab1').on('click', function(){
      $('.btn-to-tab').removeClass('btn-to-tab_active')
      $('.btn-to-tab1').addClass('btn-to-tab_active')
      $('.tab-table').removeClass('tab-table-active')
      $('.table1').addClass('tab-table-active')
    });
    $('.btn-to-tab2').on('click', function(){
      $('.btn-to-tab').removeClass('btn-to-tab_active')
      $('.btn-to-tab2').addClass('btn-to-tab_active')
      $('.tab-table').removeClass('tab-table-active')
      $('.table2').addClass('tab-table-active')
    });
    $('.btn-to-tab3').on('click', function(){
      $('.btn-to-tab').removeClass('btn-to-tab_active')
      $('.btn-to-tab3').addClass('btn-to-tab_active')
      $('.tab-table').removeClass('tab-table-active')
      $('.table3').addClass('tab-table-active')
    });
    
    $('.btn-to-tab-woods-1').on('click', function(){
      $('.btn-to-tab').removeClass('btn-to-tab_active')
      $('.btn-to-tab-woods-1').addClass('btn-to-tab_active')
      $('.table-woods-item').removeClass('table-woods-active')
      $('.table-woods-item-1').addClass('table-woods-active')
    });
    $('.btn-to-tab-woods-2').on('click', function(){
      $('.btn-to-tab').removeClass('btn-to-tab_active')
      $('.btn-to-tab-woods-2').addClass('btn-to-tab_active')
      $('.table-woods-item').removeClass('table-woods-active')
      $('.table-woods-item-2').addClass('table-woods-active')
    });
    $('.btn-to-tab-woods-3').on('click', function(){
      $('.btn-to-tab').removeClass('btn-to-tab_active')
      $('.btn-to-tab-woods-3').addClass('btn-to-tab_active')
      $('.table-woods-item').removeClass('table-woods-active')
      $('.table-woods-item-3').addClass('table-woods-active')
    });
  });