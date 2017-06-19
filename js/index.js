//返回顶部
$(function(){
	 $(document).scroll(function(){
	 	  var showTop=$(document).scrollTop();   //出现/不出现
	 	  if(showTop>400){
	 	  	 $(".move").fadeIn()
	 	  }else{
	 	  	$(".move").fadeOut()
	 	  }
	 })
	 $(".moveTop1").click(function(){  
	      $('body,html').animate({    //返回body顶部--//浏览器-兼容性
	      	 scrollTop:0             //scrollTop--数字值
	      })
     })
	 $(".moveTop").mouseover(function(){
	 	       $(".moveTop").animate({top:"-64px"},500)
	 	       $(".moveTop1").animate({top:"0px"},500)
	 })
	 $(".moveTop1").mouseover(function(){
	 	       // $(".moveTop1").css({"background":"cornflowerblue",'borderColor':'cornflowerblue','color':'white'})
	            
	 })
	 $(".moveTop1").mouseout(function(){
	 	   	//  $(".moveTop1").css({"background":"white",'borderColor':'gray','color':'gray'}) 
	 	   	  $(".moveTop1").animate({top:"-64px"},500)
	            $(".moveTop").animate({top:"0px"},500)  
	 
	 })

})
//下拉菜单         
$(".header a").mouseover(function(){
	   $(this).find(".menu2").slideDown()
       
})
$(".header a").mouseleave(function(){
	   $(this).find(".menu2").slideUp()

})
$(".header nav a").hover(function(){
	 $(this).find("img").attr("src","imgs/nav_1.png")
	 $(this).find("li").attr("src","imgs/nav_bg.png")
},function(){
	 $(this).find("img").attr("src","imgs/nav_hover.png")
})
//交换图片和文字
/*$(function(){
	  var img=["imgs/banner01_bg.jpg","imgs/article_img.jpg","imgs/banner01_bg.jpg"]
      var hover=["imgs/prev_hover.png","imgs/goleft.png","imgs/next_hover.png","imgs/goright.png"];
     
      var index=0;  //下标
      $(".banner .img5").click(function(){   //模块--   点击.img5
      	//alert(img[index]);
      	index--;
        if(index<0){
        	index=img.length-1;
        }
        zjm();          //调用--
      })
})

$(function(){
	   var index=0;
	   $(".content-b .bannerbox .div").hide();
       $(".content-b .bannerbox .div").eq(index).show()
	//  左右按钮
	   $(".content-b .btn-box .left").click(function(){
	   	   // console.log($(".content-b .bannerbox .div").length)
	   	   index--;
	   	   if(index<0){
	   	   	   index=2; 
	   	   }
	       div()
	       imgbox()
	       imgbox1()
	   })
       $(".content-b .btn-box .right").click(function(){
	   	   index++;
	   	   if(index==3){
	   	   	   index=0; 
	   	   }
	   		div()
	   })
      function div(){
      	       /*$(".content-b .bannerbox").animate({   //300%--向左移动 后
      	   	        "marginLeft":"-1582px"
      	         },500,function(){                     //向后添加  第一个，300%再向左移动   
      	         $(".content-b .bannerbox").appen d
      	         ($(".content-b .bannerbox .div").eq(0));
      	         $(".content-b .bannerbox").css('marginLeft','0px')
      	         })*/
/*      	  $(".content-b .bannerbox .div").eq(index).show();
      	  $(".content-b .bannerbox .div").eq(index).siblings().hide();
      }
    function bannerimg(){
    	  //   $(".content-b .bannerbox .div").eq(index).attr('src',img(index))
    	  //转换成   div背景图片
    }
    function imgbox(){
    	$(".imgbox .img1").animate({'left':'0'})
        $(".imgbox .img2").animate({'left':'0'})
    }
    function imgbox1(){
    	$(".imgbox .img4").animate({'left':'-338px'})
        $(".imgbox .img5").animate({'left':'-181px'})
    }
})*/

//公司简介
$(function(){
	  var index=0;      //赋值为0（和length比较后 -才成立-的条件）
	  var length=5      //eq从0开始
	  $(".company").find(".content").hide();      
	  $(".company").find(".content").eq(index).show();  //动态的让指定的.contet 显示
	  $(".company .contents .btn .goleft").click(function(){
	  	  index--;
	  	  if(index<0){
	  	  	index=length       //=2
	  	  }
	      left()  
	      cycle()
	  })
      $(".company .contents .btn .goright").click(function(){
         index++;
         if(index==5){
	  	  	index=0
	  	  }
         right()
         cycle()
      })
      $(".company").find("span").click(function(){  //圆圈一直向上/下 -点击时: img的动画方向
      	       var i=index                         //第i 个圆圈 与 第index 个content（div）***********
      	       index=$(this).index()              //获取当前-第几个-span
      	      // alert(index)
      	       if(i<index){
      	       	   left()
      	       }else{
      	       	   right()
      	       }
      })
      function left(){//左边点击--1.先(已有--的隐藏，当前eq(index)显示)2.img ， 文字  动画--的方法
      	    $(".company").find(".content").hide();
      	    $(".company").find(".content").eq(index).show();
      	    $(".company").find(".content").eq(index).find(".imginfo").css("left",-500);//less里：absolute
            $(".company").find(".content").eq(index).find(".imginfo").animate({left:0},500);
            $(".company").find(".content").eq(index).find(".infobox").css("left",-500);//less里：absolute
            $(".company").find(".content").eq(index).find(".infobox").animate({left:0},500);
      }
       function right(){
       	    $(".company").find(".content").hide();
      	    $(".company").find(".content").eq(index).show();
      	    $(".company").find(".content").eq(index).find(".imginfo").css("left",500);//less里：absolute
            $(".company").find(".content").eq(index).find(".imginfo").animate({left:0},500);
            $(".company").find(".content").eq(index).find(".infobox").css("left",500);
            $(".company").find(".content").eq(index).find(".infobox").animate({left:0},500);
       }
        //几个圆的动画-自身addClass("active")** 与（左右btn 的链接）*************
        function cycle(){                //less里加个-active/几个圆的hover //排除法：余下的颜色不变*********
        	$(".company .nav").find("span").eq(index).addClass("active");            //attr("background","blue")
        	$(".company .nav").find("span").eq(index).siblings().removeClass("active");
        	
        }
       
       
       $(".company").find(".goleft").hover(function(){   //leftbtn--hover
       	    	  $(this).attr("src","imgs/prev_hover.png")
       	    },function(){
       	    	  $(this).attr("src","imgs/goleft.png") 
       })
      $(".company").find(".goright").hover(function(){   //rightbtn--hover
       	    	  $(this).attr("src","imgs/next_hover.png")
       	    },function(){
       	    	  $(this).attr("src","imgs/goright.png") 
       })
      
})

//--主要产品
$(function(){
	  var index=0;      //赋值为0（和length比较后 -才成立-的条件）
	  var length=5      //eq从0开始
	  $(".product").find(".content").hide();      
	  $(".product").find(".content").eq(index).show();  //动态的让指定的.contet 显示
	    
	  $(".product .contents .btn .goleft").click(function(){
		  	  index--;
		  	  if(index<0){
		  	  	index=length       //=5
		  	  }
		  	           //alert($(".product .contents .contentbox .content").length)
		  	          //eq(index)-循环（  同一个固定 高宽盒子-relative里）：3个content有相同的class名/absolute-3个content重叠
		      left()  
		      cycle()
		      cycle2()
		      img()
	  })
      $(".product .contents .btn .goright").click(function(){
	         index++;
	         if(index==6){          //==6
		  	  	index=0
		  	  }
	         right()
	         cycle()
	         cycle2()
	         img()
      })
      //最重要的动画
      $(".product .nav").find("span").click(function(){  //圆圈一直向上/下 -点击时: img的动画方向
      	       var i=index                         //第i 个圆圈 与 第index 个content（div）***********
      	       index=$(this).index()              //获取当前-第几个-span
      	      //alert(index)                    //测试有几个index******
      	       
      	       if(i<index){
      	       	   left()
      	       }else{
      	       	   right()
      	       }
      	    
      })
       function left(){//左边点击--1.先(已有--的隐藏，当前eq(index)显示)2.‘img‘/’文字div的动画’--的方法
      	    $(".product").find(".content").hide();
      	    $(".product").find(".content").eq(index).show();
      	    $(".product").find(".content").eq(index).find(".imginfo").css("left",-500);//less里：absolute
            $(".product").find(".content").eq(index).find(".imginfo").animate({left:0},500);
            $(".product").find(".content").eq(index).find(".infobox").css("left",-500);//less里：absolute
            $(".product").find(".content").eq(index).find(".infobox").animate({left:0},500);
       }
       function right(){
       	    $(".product").find(".content").hide();
      	    $(".product").find(".content").eq(index).show();
      	    $(".product").find(".content").eq(index).find(".imginfo").css("left",500);//less里：absolute
            $(".product").find(".content").eq(index).find(".imginfo").animate({left:0},500);
            $(".product").find(".content").eq(index).find(".infobox").css("left",500);
            $(".product").find(".content").eq(index).find(".infobox").animate({left:0},500);
       }
        //几个圆的动画-自身addClass("active")** 与（左右btn 的链接）*************
       function cycle(){                //less里加个-active/几个圆的hover //排除法：余下的颜色不变*********
        	$(".product .nav").find("span").eq(index).addClass("active");            //attr("background","blue")
        	$(".product .nav").find("span").eq(index).siblings().removeClass("active");
        	
       }
       
       $(".product").find(".goleft").hover(function(){   //leftbtn--hover
       	    	  $(this).attr("src","imgs/prev_hover.png")
       	    },function(){
       	    	  $(this).attr("src","imgs/goleft.png") 
       })
      $(".product").find(".goright").hover(function(){   //rightbtn--hover
       	    	  $(this).attr("src","imgs/next_hover.png")
       	    },function(){
       	    	  $(this).attr("src","imgs/goright.png") 
       })
     
    
   //.common .go-----动画
      function cycle2(){                //less里加个-active/几个圆的hover //排除法：余下的颜色不变*********
        	$(".product .go").find("i").eq(index).addClass("active");            //attr("background","blue")
        	$(".product .go").find("i").eq(index).siblings().removeClass("active");
        	
      }
      function img(){
        	$(".product .go").find(".imgs2").addClass("active");   //白色背景
        	$(".product .white").find(".imgs").eq(index).addClass("animates").show();
        	$(".product .white").find(".imgs").eq(index).siblings().removeClass("animates").show();
      }
    //点击go --圆圈  
    $(".product .i").find('i').click(function(){ 
	          left()
	          cycle()
	          index--;
		  	  if(index<0){
		  	  	index=length 
		  	  	console.log(index)
		  	  }
		  	   
             	      	       
    })
      
      
     
})

//业务范围
$(function(){
	
	$(".list").click(function(){
		//  $(this).find(".menu2").slideToggle()                   //this当前
		 // $(this).siblings(".list").children(".menu2").slideUp() //siblings(".list") 
	})
	$(".open").click(function(){
		 $(".open").animate({top:"67px"})
		 $(".close").animate({top:"0px"})
		 $(this).parent().parent().find(".menu2").slideToggle()                   //this当前
		 $(this).parent().parent().siblings(".list").children(".menu2").slideUp()                   
		 
	})
	$(".close").click(function(){
		 $(".open").animate({top:"0px"})
		 $(".close").animate({top:"-67px"})
		 $(this).parent().parent().find(".menu2").slideToggle()                   //this当前
		 $(this).parent().parent().siblings(".list").children(".menu2").slideUp()  
	})
	$(".middle-img").click(function(){
		 $(".open").animate({top:"67px"})
		 $(".close").animate({top:"0px"},function(){
		 	   
		 })
		
		 $(this).parent().parent().find(".menu2").slideToggle()                   //this当前
		 $(this).parent().parent().siblings(".list").children(".menu2").slideUp()
	})
	
})
//团队介绍
$(function(){
	var index=0;
	var length=2;
	$(".team-left").click(function(){
		index++;          // 左边:2 -0 1  append()
		if(index==3){
			index=0
		}
		left() 
		    //console.log(index)    //小小圆  '变色' 
			$('.team-content .team-btn .center li').removeClass('active');   
		    $('.team-content .team-btn .center li').eq(index).addClass('active');
		
	})
	$(".team-right").click(function(){
		index--;
		if(index<0){
			index=length;
		}                       
		right()   
			$('.team-content .team-btn .center li').removeClass('active');   
	        $('.team-content .team-btn .center li').eq(index).addClass('active');
 
    })
	function left(){
          $(".email-box").animate({marginLeft:"100px"},1000,function(){   //300% 的动画
				$(".email-box").animate({marginLeft:"-1100px"}
			    ,600,function(){
			    	 $(".email-box").append($(".email-box .email-img").eq(0))//把第一个添加到最后
			    	 $(".email-box").css({marginLeft:'0'})
		 	    })
		  })
    }
	function right(){
    	  $(".team-content").find(".email-box").css("marginLeft",-750);
    	  $(".team-content").find(".email-box").animate({marginLeft:0},500)}
    })

//  $(".team-content .center").find("li").click(function(){
//  	  var index=$(this).index()
//  	  alert(index)
//  })  圆圈动画
    

//music动画 *********
$(function(){
	   $(".music .mu div").click(function(){
	   	     var index=$(this).index()
	   	         $('audio')[index].play()
	   	         
	   })
})











