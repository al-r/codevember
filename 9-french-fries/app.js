$(document).ready(function() {
    $('#pepper').hover(function(){     
        $('#potato').addClass('activate').delay(5800).queue(function(next){
		    $("#sneeze").addClass('active-sneeze');
		    next();
		}).delay(200).queue(function(next){
        	$("#french-fries").addClass('active-fries');
        	$(".frie").removeClass('active-frie');
        	next();
		});  
    });

    $("#french-fries").hover(function(){
    	location.reload();
    });
});  