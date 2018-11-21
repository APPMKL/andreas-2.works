
var move = 0;
var num = 0;

var imgArray = ["1.png",
                "2.png",
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png"];




$(document).ready(function() {

    $(window).mousemove(function(e) {
        
      
        //random all of the transform values//
        function rdm(min,max){
    	   return Math.floor(Math.random()*(max-min+1)+min);
	    }
        
        //random all of the images//
        var number = 1 + Math.floor(Math.random() * 6);
        var images = imgArray[number];
        
        console.log(images);
        
        
            if(move++ >= 2){         
                $(".stuff").append('<img src="'+ imgArray[number]+'" class="logo" style="left:' + e.pageX + 'px; top:' + e.pageY + 'px; width:' + rdm(80,250) + 'px; transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0); -webkit-transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0); -moz-transform:rotate(' + rdm(0,360) + 'deg) translate(-50%, -50%) translateZ(0);">');
                    
                move = 0;
            }
    });
    
   		
    
});