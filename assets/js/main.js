const close = document.querySelector('.close');
const menuItem = document.querySelector('.menu-item');
      const bars = document.querySelector('.bars');

      document.addEventListener('DOMContentLoaded', function(){
        bars.addEventListener('click', function(){
          menuItem.classList.toggle('menu-active');
        })
})

      document.addEventListener('DOMContentLoaded', function(){
      	close.addEventListener('click', function(){
        	menuItem.classList.remove('menu-active');
        })
      })

$(document).ready(function(){
	$('.products-carousel-main-inner').owlCarousel({
		items:3,
		loop:true,
		autoplay:true,
		dots:false,
		nav:true,
		margin:20,
		navText:["<img src='assets/img/angle-left.png'>","<img src='assets/img/angle-right.png'>"],
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:true,
	            loop:true
	        }
	    }
	})
})