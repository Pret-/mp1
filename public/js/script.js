function smoothScrolling(){$(".scroll").click(function(a){a.preventDefault();var b=$(this.hash).offset().top;$("html,body").animate({scrollTop:b},800)})}function carousel(){var a=400;carouselItems.fadeOut(a).eq(currentItem).fadeIn(a)}function positionIndicator(){for(var a=$("#navbar").offset().top,b=a+$("#navbar").height(),c=null,d=0;d<sections.length;d++)b>=$("#"+sections[d].id).offset().top&&(c=sections[d]);null==c?(c=body,nav.setAttribute("class","large")):a>=$("#"+c.id).offset().top&&nav.setAttribute("class","small");for(var d=0;d<menuLinks.length;d++)menuLinks[d].name==c.id&&menuLinks[d].focus()}function movePrev(){currentItem--,0>currentItem&&(currentItem=carouselItems.length-1),carousel()}function moveNext(){currentItem++,currentItem>carouselItems.length-1&&(currentItem=0),carousel()}var sections=document.getElementsByTagName("section"),menuLinks=document.getElementsByClassName("scroll"),body=document.getElementsByTagName("body")[0],nav=document.getElementsByTagName("nav")[0],carouselItems=$("#carousel").children("li"),currentItem=0,modal=document.getElementById("modal"),modalContent1=document.getElementById("modal-content1"),modalContent2=document.getElementById("modal-content2"),modalContent3=document.getElementById("modal-content3");$(function(){smoothScrolling(),$("#prev").click(function(){movePrev()}),$("#next").click(function(){moveNext()}),moveNext(),$("#modal-button1").click(function(){modal.style.display="block",modalContent1.style.display="block"}),$("#modal-button2").click(function(){modal.style.display="block",modalContent2.style.display="block"}),$("#modal-button3").click(function(){modal.style.display="block",modalContent3.style.display="block"})}),$(document).scroll(function(){positionIndicator()}),window.onclick=function(a){a.target==modal&&(modal.style.display="none",modalContent1.style.display="none",modalContent2.style.display="none",modalContent3.style.display="none")};