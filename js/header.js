//下拉菜单         
$(".header li").mouseover(function(){
	   $(this).find("nav").slideDown()
       
})
$(".header li").mouseleave(function(){
	   $(this).find("nav").slideUp()

})
$(".header li").hover(function(){
	 $(this).find("img").attr("src","imgs/nav_1.png")
},function(){
	 $(this).find("img").attr("src","imgs/nav_hover.png")
})