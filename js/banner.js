// banner
$(function(){
	var index = 0;
	var imgs = ['../imgs/banner01_bg.jpg','../imgs/banner02_bg.jpg','../imgs/banner01_bg.jpg'];
//'点击' 左右按钮	
	$('.banner .btnbar .left').click(function(){
		index--;
		if(index < 0)
		{
			index =imgs.length - 1;  //最后一张图片   的长度
		}
		banner();
	});
	$('.banner .btnbar .right').click(function(){
		index++;
		if(index > imgs.length - 1)
		{
			index = 0;
		}
		banner();
	});
//'点击' 小小按钮***********
	$('.banner .btnbar .center li').click(function(){   //'点击 '每一个小圆
		index = $(this).index();                   
		banner();
	});
	$('.banner .moves').first().show();        //文字
	
	function resets(){                        //重置  文字动画-css位置***********
		$('.banner .moves').find('.img1').css({
			left:-600
		})
	    $('.banner .moves').find('.img4').css({
			left:-600
		})
		$('.banner .moves').find('.img7').css({
			left:-600
		})
		$('.banner .moves').find('.img2').css({
			left:600
		})
		$('.banner .moves').find('.img6').css({
			left:600
		})
		$('.banner .moves').find('.img8').css({
			left:600
		})
		
	}

	function banner(){
		$('.banner').css({
			background:'url('+imgs[index]+')',   //切换到指定的背景图片********	       
			backgroundPositionX:-170            //背景图片的  位移
		});
//小小按钮'变色'************		
		$('.banner .btnbar li').removeClass('active');   
		$('.banner .btnbar li').eq(index).addClass('active');
		
		$('.banner .moves').hide();           
		$('.banner .moves').eq(index).show();  //相应  文字  显示
		resets();                             //文字的动画css-->>animate（上面的函数）*************
		$('.banner .moves').find('.img1').stop().animate({
			left:326
		})
	   $('.banner .moves').find('.img2').stop().animate({
			left:347
		})
		$('.banner .moves').find('.img4').stop().animate({
			left:36
		})
		$('.banner .moves').find('.img6').stop().animate({
			left:250
		})
		$('.banner .moves').find('.img7').stop().animate({
			left:326
		})
		$('.banner .moves').find('.img8').stop().animate({
			left:347
		})
		
	}
//--//刚进入banner时  'css' 的动画************
	$('.banner .moves').find('.img1').css({
			left:-600
		})
	$('.banner .moves').find('.img2').css({
			left:600
		})
	$('.banner .moves').find('.img1').stop().animate({
			left:326
		})
	$('.banner .moves').find('.img2').stop().animate({
			left:347
		})
	
})
