$(document).ready(function(){
//��ũ�ѽ� ����޴� ��� ����
	$(window).scroll(function(){
  	scrollGnb();
  });
  
  //��ũ Ŭ���� ��� �������� �ε巴�� �̵���Ű��
  $(document).on('click','#gnb a',function(event){
  var headerHeight = $('header').outerHeight();
  event.preventDefault();
  	$("html,body").animate({
    	scrollTop : $(this.hash).offset().top - headerHeight
    },100)
  });
});


//����޴� ��ܰ��� �Լ�
function scrollGnb(){
	var windowTop = $(window).scrollTop();
  if(windowTop > 0) {
  	$("header").addClass('scroll');
  } else {
  	$("header").removeClass('scroll');
  }
}

scrollGnb();//���ΰ�ħ, ���� ���ӽÿ� Ȯ��

// ������� ��ũ�� JS ����


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

// ������� �׷��� JS ����


$(function (){
         $("#button").click(function (){      
         $("#divToggle").toggle();     
 });
});

// ������� PastSkill ��ư ����


$(function () {
  // ���̾� display none ����
  $(".layer_bg, .layer_wrap").hide();
  //���̾��˾� ��ġ ���� function �����
  //function layer_position(){
  //  var win_W = $(window).width();
  //  var win_H = $(window).height();
  //  $(".layer_wrap").css({'left':(win_W-300)/2, 'top':(win_H-100)/2});
  // };
  //���̾��˾� open ���� function �����
  function layer_open(no){
    $(".layer_wrap[layer="+no+"]").fadeIn();
    $(".layer_bg").fadeIn();
    //���̾� ���� �� ����ȭ�� Ŭ���� ȭ�� �ݱ�
    $(".layer_bg").click(function (e) {
      if(!$(".layer_wrap").has(e.target).length){
        layer_close();
      };
    });
  };
  //���̾��˾� close ���� function �����
  function layer_close(){
    $(".layer_wrap, .layer_bg").fadeOut();
  };
  //��ũ Ŭ���� �ش� ���̾��˾� ȣ��
  $(".btn_layer").click(function () {
    var no = $(this).attr("layer");
    layer_open(no);
  });
  //�ݱ� ��ư Ŭ���� ���̾� �ݱ�
  $(".btn_close").click(function () {
    layer_close();
  });
  //������ ���� - ���̾� ��ġ ���
  // $(window).resize(function () {
  //  layer_position();
  // });
})

//������� ���̾� �˾� ����


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

//������� TOP��ư ����


$(function(){
$('html').removeClass('no-js');
});