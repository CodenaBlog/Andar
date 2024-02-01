  /**'
   * @append - 뒤에 추가
   * @click - 클릭 이벤트
   * @focus - 집증
   * @document - 문서(처음부터 읽을때)
   * @val - value 값
   * @text - 텍스트
   * @siblings - 형제선택
   * @parent - 부모선택
   * @children - 자식선책
   * @보간 - 백틱
   * @동적이벤트생성에이벤트주기
   * @동적테그 - 마크업에 테그가 없었던게 스크립트로 추가된거
   * @remove - 삭제(테그 전체가 삭제)
   * @this - 이거(이벤트 주최자 중 내가 선택한 그거)
   */


  /**
   * 
   * 1. 사이드 메뉴 열렸을떄 뒷 배경 어두워지는거
   * 2. 사이드 메뉴 열렸을때 스크롤 영역
   * 
   * 
   */


/**
 * gnb shoppingbag -> num
 */


/**
 * top banner -> swiper
 */
$(function(){

  var bannerSlide = new Swiper(".banner-slide", {

    loop : true,
    effect : 'fade',

    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    
    pagination: {
      clickable : true,
    },
  });


  /**
   * main banner -> swiper
   */
  var visualSlide = new Swiper(".visual-slide", {

    loop : true,
    effect : 'fade',

    pagination: {
      el:".swiper-pagination",
      type: 'bullets',
      clickable : true,
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });


/**
 * left side menu -> shwow/hide
 */
  $('#menuBtn').click(function(e){
    e.preventDefault();
    $('.aside-menu, .gnb-bg').addClass('on')
    $('body').addClass('hidden') // 배경클릭 해도 닫히게
  });
  $('.aside-menu .btn-close, .gnb-bg').click(function(e){
    e.preventDefault();
    $('.aside-menu, .gnb-bg').removeClass('on')
    $('body').removeClass('hidden') // 배경클릭 해도 닫히게
  });


/**
 * left side sub menu -> shwow/hide
 */
  $('.title-box').click(function(e){
    e.preventDefault();

    if ($('.sub-list').css('dlsplay','block')) {
      $('.board-area .sub-list').stop().slideUp(200);
      
    } else {
      $('.board-area .sub-list').stop().slideToggle(200);
      
    }
  });



/**
 * scroll event
 */
  let scrollTop = 0;

  $(window).scroll(function(){ // header gnb scroll -> show/hide

  const curr = $(this).scrollTop();

    if ( curr > 0 ) {
      $('.header').addClass('on');
    } else {
      $('.header').removeClass('on');
    }  
    scrollTop = curr;
  });
  $(window).trigger('scroll'); // 강제 스크롤






/**
 * header sub menu -> btn click motion
 */
  $('#gnbBtn').click(function(){
      $('.gnb').toggleClass('on');
      $('.gnb .group-all').slideToggle(200);
  });



/**
 * recommend slide
 */
var slideSlide = new Swiper(".cate-slide", {

  slidesPerView: 2.2,
  spaceBetween: 10,
  freeMode: true,

  pagination: {
    clickable: true,
  },
});



/**
 * top click
 */

$("#topBtn").click(function(){

  $("html, body").animate({scrollTop : 0}, 500);
 // window.scrollTo({top:0,behavior:"smooth"})
  return false;

});



}); // 지우지 말것!!!