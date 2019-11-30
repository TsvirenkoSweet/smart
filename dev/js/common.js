$('body').addClass('loader');
$(document).ready(function () {
  $('.slick').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  });
  isVariableProduct();
  function isVariableProduct() {
    console.log('1');
    if ($('.single-product').find('table.variations').length > 0) {
      $('.product_custom_attr').remove();
    }
  }
  ciciCococ();

  function ciciCococ() {
    $('.woocommerce-loop-product__link').each(function() {
      $(this).find('.woocommerce-loop-product__title, .price').wrapAll( "<div class='coco' />");
      $(this).find('.custom-sku').wrapAll( "<div class='cici' />");
      var clone = $(this).siblings('div').find('.wishlist-btn').clone();
      $('.cici', this).append(clone);
      $(this).siblings('div').find('.wishlist-btn-wrap').closest('div').hide();
      var cal = $(this).find('.brand-name').clone();
      $('.coco', this).append(cal);
    });
  }

  addArrow();

  function addArrow() {
    $('.header__mobile-nav-menu .menu>.menu-item>.sub-menu>.menu-item').each(function () {
      $(this).after('<li class="dynamic-row"></li>');
    });
  }
  function showComment() {
    $("#wcThreadWrapper .wc-comment").not(".show").each(function(i, el){
      if (i < 3) {
        $(this).addClass('show').slideDown(300);
      }
    });
    if ($("#wcThreadWrapper .wc-comment").not(".show").length === 0) {
      $('#showMore').remove();
      $("#wcThreadWrapper").append('<div id="hideMore">Скрыть<svg class="icon icon-4 revert" ><use xlink:href="https://kurtki.top/wp-content/themes/storefront-child/img/svg/sprite.svg#jaket_4"></use></svg></div>')
      $('#hideMore').on('click', function () {
        hideComment();
      });
    }
  }
  function hideComment() {
    $("#wcThreadWrapper .wc-comment.show").each(function(i, el){
      if (i >= 3) {
        $(this).removeClass('show').slideDown(300);
      }
    });
    $("#wcThreadWrapper .wc-comment").not(".show").each(function(){
      $(this).slideUp(300)
    });
    $('#hideMore').remove();
    $("#wcThreadWrapper").append('<div id="showMore">Дальше<svg class="icon icon-4"><use xlink:href="https://kurtki.top/wp-content/themes/storefront-child/img/svg/sprite.svg#jaket_4"></use></svg></div>')
    $('#showMore').on('click', function () {
      showComment();
    });
  }
  function commentFun() {
    $( ".wc-thread-wrapper .wc-comment").each(function() {
      $( ".wc-comment-right .wc-comment-header, .wc-comment-right .wc-comment-footer", $(this)).wrapAll( "<div class='wrap-comment'></div>" );
    });
    $('body').removeClass('loader');
    var clone = $('.wpd-form-col-right').first().clone();
    $('.wpd-form-col-right').first().hide();
    $('.wc-form-footer').after(clone);
    $('.wc_comm_submit').on('click', function () {
      $('body').addClass('loader');
      setTimeout(function () {
        document.location.reload();
      }, 500);
    });
  }
  setTimeout(function () {
    commentFun();
    showComment();
    $("#wcThreadWrapper").append('<div id="showMore">Дальше<svg class="icon icon-4"><use xlink:href="https://kurtki.top/wp-content/themes/storefront-child/img/svg/sprite.svg#jaket_4"></use></svg></div>')
    $('#showMore').on('click', function () {
      showComment();
    });
  }, 1000);
  function hoverProductImageEvent() {
    $('.products .product').each(function () {
      if ($('.product-slider-cart .product-slider-cart-image img', this).length > 0) {
        $('.product-slider-cart .product-slider-cart-image img', this).each(function () {
          var targetImg = $(this).closest('.product').find('img.attachment-woocommerce_thumbnail');
          var newSrc = $(this).attr('src');
          var oldScr = targetImg.attr('src');
          $(this).hover(function() {
            targetImg.attr('src', newSrc);
            targetImg.attr('srcset', newSrc);
          }, function(){
            targetImg.attr('src', oldScr);
            targetImg.attr('srcset', oldScr);
          });
        });
      }
    });
  }
  hoverProductImageEvent();
  function addClassIfSliderExistOnCategoryPage() {
    $('.product-slider-cart').each(function() {
      if($(this).children().length > 0) {
        $(this).closest('.product').find('.overlay-container-vsedostalo').addClass('slider-on');
      }
    })
  }
  addClassIfSliderExistOnCategoryPage();
});

