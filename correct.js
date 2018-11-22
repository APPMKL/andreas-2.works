$(document).ready(function(){


	
	var move = 0;
	var count = 0;
	var down = false;
	var mobile = false;
	var winHeight = $(window).height();
	
	$(document).mousemove(function(e){
		becool(e);
		e.preventDefault();
	}).mousedown(function(e){
		down = true;
		e.preventDefault();
	}).mouseup(function(e){
		down = false;
		e.preventDefault();
	});
	
	document.addEventListener('touchmove', function(e){
		becool(e);
		mobile = true;
		// $('body').css({
		// 	background:'hsl(' + (e.pageY/winHeight)*360 + ',60%,60%)'
		// });
		e.preventDefault();
	}, false);
	
	document.addEventListener('touchstart', function(e){
		becool(e);
		mobile = true;
		// $('body').css({
		// 	background:'hsl(' + (e.pageY/winHeight)*360 + ',60%,60%)'
		// });
		e.preventDefault();
	}, false);
	
	function rdm(min,max){
    	return Math.floor(Math.random()*(max-min+1)+min);
	}
		
	function becool(e){
		if(move++ >= 20){
			var text = glamslam[rdm(0, glamslam.length-1)];

			if(mobile === true){
				$('.stuff').append('<div class="logo" style="left:' + e.pageX + 'px; top:' + e.pageY + 'px; font-size:' + rdm(40,160) + 'px; transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0);">' + text + '</div>');
			} else {
				$('.stuff').append('<div class="logo" style="left:' + e.pageX + 'px; top:' + e.pageY + 'px; font-size:' + rdm(40,160) + 'px; transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0); -webkit-transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0); -moz-transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0);">' + text + '</div>');
			}

			// if(count++ > 2000){
			// 	$('.logo').eq(0).remove();
			// }
			move = 0;
		}
	}
});

