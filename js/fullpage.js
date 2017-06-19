//fullpage 的动画
 window.onload=function(){
 	var index=0;        //--e.wheelDelta-正/负数  
 	var length=document.querySelectorAll(".page").length;
 	var status=true; 
    var time=500;     //时间
 //     e=e||event||window.event
 	document.onmousewheel=function(e){//console.log(e); //-onmousewheel-事件
 	    if(status){
 	     	status=false;
 		           //console.log(e.wheelDelta--测试-正/负数);-onmousewheel-事件里的-事件--
 			      //alert(length)
 			if(e.wheelDelta<0){           //负数-向上******
 				index++;                  //2 0 1  :0-gotop--first()
 				if(index==length){
 					index=0 
 				}
 			    $(".fullpage .page").removeClass("gotop");
 			    $(".fullpage .page").removeClass("godown");
 			    $(".fullpage .page").first().addClass("gotop");
 			    $(".fullpage").append($(".fullpage .page").first());
 			
 			}else if(e.wheelDelta>0){     //
 				index--;                 //2 1 0  :2-godown --last()
 				if(index<0){
 				   index=length-1      //最后一个
 				}
 				$(".fullpage .page").removeClass("godown");
 				$(".fullpage .page").removeClass("gotop");
 				$(".fullpage .page").last().addClass("godown");
 				setTimeout(function(){
 		            $(".fullpage").prepend($(".fullpage .page").last());
 	             
 				},time);
 			}
 			setTimeout(function(){    //true--1s后执行一次
 		             status=true; 
 	        },time);
 	    }
 	} 
 	
}
 
 //第2页动画
 $(function(){
 	  var index=0;
 	  var length=2;
 	  $(".goLeft").click(function(){
 		   	   index++;
 		   	   if(index==3){
 		   	   	   index=0;
 		   	   }
 		   	  // console.log($('.page2 ul').length)
 	  })
 	  $(".fullpage .page page4 .goLeft").click(function(){
             left()
      })
      function left(){
      	    /*$(".fullpage .page2").find("ul").hide();
      	    $(".fullpage .page2").find("ul").eq(index).show();*/
      	    $(".fullpage .page2").find("ul").eq(index).css("left",-100);
            $(".fullpage .page2").find("ul").eq(index).animate({left:0},500);
            $(".fullpage .page2").find("ul").eq(index).css("left",-100);
            $(".fullpage .page2").find("ul").eq(index).animate({left:0},500);
      }
 
 })
 
 

/*$(".header nav a").click(function(){
	  var index=$(this).parent().siblings.find('.page0')
	     if(index==4){
	     	index=3
	  }
})*/
