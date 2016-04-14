// Amauris' example

// $(document).ready(function(){

// 	$('.lightbox-link').click(function(){
// 		$('img').css('display', 'block');
// 		$('body').css('background', 'grey');
// 		$('body').css('opacity', '0.9');
// 	});


// 	$('img').click(function(){
// 		$('img').css('display', 'none');
// 		$('body').css('background', 'white');
// 		$('body').css('opacity', '1');
// 	});

// })

// Juan's example

$(document).ready(function(){

	$('.lightbox-link').on('click', function(){
		$('body').append('<div id="shade"></div>');
		$('body').append('<img id="light-image" src="images/sasquatch-slide-05.png"/>');
		$('#shade').on('click', function(){
			$('#shade').remove();
			$('#light-image').remove();
		})
		$('#light-image').on('click', function(){
			$('#shade').remove();
			$('#light-image').remove();
		})
	})
})