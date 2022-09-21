
var page = 2;
jQuery(function($) {
    $('body').on('click', '.loadmore', function() {
        var data = {
            'action': 'load_posts_by_ajax',
            'page': page,
            'security': blog.security
        };
  
        $.post(blog.ajaxurl, data, function(response) {
            if($.trim(response) != '') {
                $('.blog-posts').append(response);
                page++;
            } else {
                $('.loadmore').hide();
            }
        });
    });
});
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text())
      .select();
    document.execCommand("copy");
    $temp.remove();
  }





	/*menu #*/
$(document).ready(function(){
if(window.location.hash) {
    var window_hash = window.location.hash;
//     window.location.hash = "";
}
// setTimeout( function tick() {
// 		if(window.location.hash){
// 			var hesh = window.location.hash.slice(1);
// 			window.location.hash = "home";
// 			window.location.hash = hesh;
// 		}
// 	}, 1500);	
// 	if(document.querySelectorAll('.current-menu-item')[1]) 
// 		document.querySelectorAll('.current-menu-item')[1].classList.remove('current-menu-item');Object
		
	  $('.header_menu_m').click( function() {
//     $('#masthead').css({"background-color": "black"});
    $('.navbar-collapse').show();
		   $('#site-navigation').css({"height": "100vh"});
		   $('#site-navigation').css({"align-items": "start"});
		  $('.navbar-collapse').css({"margin-top": "100px"});
    	$('.close').show();
	 $('.close path').css({"fill": "white"});
    $('.navbar-toggler').hide();
    $('html').css('overflow', 'hidden');
});

		
		$('.close').click( function() {
    $('.close').hide();
    $('.navbar-collapse').hide();
    $('.navbar-toggler').show();
	  $('#site-navigation').css({"height": "7vh"});
//     $('#masthead').css({"background-color": "transparent", "backdrop-filter": "blur(0px)"});
//     $('html').css('overflow', 'inherit');
// 	 $(".black_logo").show();
// 	 $(".white_logo").hide();
});
$('.menu-item').click( function() {
    $('.navbar-collapse').hide();
    $('.close').hide();
    $('.navbar-toggler').show();
	 $('#site-navigation').css({"height": "10vh"});

});

});

// $(document).ready(function() {
// 	$(".gallery").magnificPopup({
// 		delegate: "a",
// 		type: "image",
// 		tLoading: "Loading image #%curr%...",
// 		mainClass: "mfp-img-mobile",
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
// 		}
// 	});
// });


// $(document).ready(function() {
// 	$(".gallery").magnificPopup({
// 		delegate: "a",
// 		type: "image",
// 		tLoading: "Loading image #%curr%...",
// 		mainClass: "mfp-img-mobile",
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
// 		}
// 	});
// });


// $(document).ready(function(){
//   $(".slider").slick({
//     infinite: false,
//     slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   prevArrow: $('.clients_say_carousel_prev_arrow'),
//   nextArrow: $('.clients_say_carousel_next_arrow'),
 
//   responsive:  [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         infinite: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
   
//   ]
  
//   });

  

// });

// $(document).ready(function(){




//   $('.cat-item input').click( function() {
//     var parent_label = $(this).parent();

//     if ( parent_label.hasClass('checked') ) {
//       parent_label.removeClass('checked');
//     } else {
//       parent_label.addClass('checked');
//     }
//   });
// $('.post_slider').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   arrows: true,
//   prevArrow: $('.clients_say_carousel_prev___arrow'),
//   nextArrow: $('.clients_say_carousel_next___arrow'),
//    autoplay: true,
//   autoplaySpeed: 2000

// })
//   $(".testimonials_slider").slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 2,
//     variableWidth:true,
//     slidesToScroll: 1,
  
//     variableWidth: true,
//     arrows: true,
//     prevArrow: $('.clients_say_carousel_prev__arrow'),
//     nextArrow: $('.clients_say_carousel_next__arrow')

//   });

  

// });