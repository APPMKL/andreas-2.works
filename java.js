
$(document).ready(function() {

var move = 0;
    var count = 0;
    var down = false;
    var mobile = false;
    var winHeight = $(window).height();


var imgArray = ["1.png",
                "2.png",
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png"];





    $(document).mousemove(function(e) {
        
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
        //  background:'hsl(' + (e.pageY/winHeight)*360 + ',60%,60%)'
        // });
        e.preventDefault();
    }, false);
    
    document.addEventListener('touchstart', function(e){
        becool(e);
        mobile = true;
        // $('body').css({
        //  background:'hsl(' + (e.pageY/winHeight)*360 + ',60%,60%)'
        // });
        e.preventDefault();
    }, false);

        //random all of the transform values//
        function rdm(min,max){
    	   return Math.floor(Math.random()*(max-min+1)+min);
	    }
        
        //random all of the images//
        
        
        function becool(e){

            if(move++ >= 2){    

            var number = 1 + Math.floor(Math.random() * 6);
            var images = imgArray[number];
        
            console.log(images);     

                if(mobile === true){
                $('.stuff').append('<img src="'+ imgArray[number]+'" class="logo" style="left:' + e.pageX + 'px; top:' + e.pageY + 'px; width:' + rdm(80,250) + 'px; transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0);">');


               
                } else {
                $(".stuff").append('<img src="'+ imgArray[number]+'" class="logo" style="left:' + e.pageX + 'px; top:' + e.pageY + 'px; width:' + rdm(80,250) + 'px; transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0); -webkit-transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0); -moz-transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0);">');
                    
                move = 0;
            }
    }
    }
   		
    
});