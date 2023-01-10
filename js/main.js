$(document).ready(function(){
//스크롤시 헤더메뉴 상단 고정
	$(window).scroll(function(){
  	scrollGnb();
  });
  
  //링크 클릭시 헤당 섹션으로 부드럽게 이동시키기
  $(document).on('click','#gnb a',function(event){
  var headerHeight = $('header').outerHeight();
  event.preventDefault();
  	$("html,body").animate({
    	scrollTop : $(this.hash).offset().top - headerHeight
    },100)
  });
});


//헤더메뉴 상단고정 함수
function scrollGnb(){
	var windowTop = $(window).scrollTop();
  if(windowTop > 0) {
  	$("header").addClass('scroll');
  } else {
  	$("header").removeClass('scroll');
  }
}

scrollGnb();//새로고침, 최초 접속시에 확인

// 여기까지 스크롤 JS 영역


(function( $ ) {
    "use strict";
    $(function() {
        function animated_contents() {
            $(".zt-skill-bar > div ").each(function (i) {
                var $this  = $(this),
                    skills = $this.data('width');

                $this.css({'width' : skills + '%'});

            });
        }
        
        if(jQuery().appear) {
            $('.zt-skill-bar').appear().on('appear', function() {
                animated_contents();
            });
        } else {
            animated_contents();
        }
    });
}(jQuery));

// 여기까지 그래프 JS 영역


$(function (){
         $("#button").click(function (){      
         $("#divToggle").toggle();     
 });
});

// 여기까지 PastSkill 버튼 영역


$(function () {
  // 레이어 display none 상태
  $(".layer_bg, .layer_wrap").hide();
  //레이어팝업 위치 지정 function 만들기
  //function layer_position(){
  //  var win_W = $(window).width();
  //  var win_H = $(window).height();
  //  $(".layer_wrap").css({'left':(win_W-300)/2, 'top':(win_H-100)/2});
  // };
  //레이어팝업 open 상태 function 만들기
  function layer_open(no){
    $(".layer_wrap[layer="+no+"]").fadeIn();
    $(".layer_bg").fadeIn();
    //레이어 영역 외 바탕화면 클릭시 화면 닫기
    $(".layer_bg").click(function (e) {
      if(!$(".layer_wrap").has(e.target).length){
        layer_close();
      };
    });
  };
  //레이어팝업 close 상태 function 만들기
  function layer_close(){
    $(".layer_wrap, .layer_bg").fadeOut();
  };
  //링크 클릭시 해당 레이어팝업 호출
  $(".btn_layer").click(function () {
    var no = $(this).attr("layer");
    layer_open(no);
  });
  //닫기 버튼 클릭시 레이어 닫기
  $(".btn_close").click(function () {
    layer_close();
  });
  //반응형 대응 - 레이어 위치 잡기
  // $(window).resize(function () {
  //  layer_position();
  // });
})

//여기까지 레이어 팝업 영역


$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function() {
    $('html, body').animate({
      scrollTop : 0
    }, 100);
    return false;
  });
});

//여기까지 TOP버튼 영역


$(function(){
$('html').removeClass('no-js');
});