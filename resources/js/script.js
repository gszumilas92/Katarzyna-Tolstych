$(document).ready(function() {
    
    $('.js--wp-1').waypoint(function(direction) {
    if(direction == "down") {
        $('.js--wp-1').addClass('animated fadeIn');
    } else {
        $('.js--wp-1').addClass('hidden');
        $('.js--wp-1').removeClass('animated fadeIn');
    }
    }, {
        offset: '50%'
    });
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
/*MODAL IMAGES JS*/    
var modal = document.getElementById('modal');
var modalImg = document.getElementById("img1");
var span = document.getElementsByClassName("close")[0];    
    
var img = document.getElementById('id1');
    


img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
span.onclick = function() { 
  modal.style.display = "none";
}   
/*MODAL IMAGES JS*/   


var img = document.getElementById('id2');

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

/*GOOGLE MAPS*/


    var map = new GMaps({
      div: '.map',
      lat: 38.7436266,
      lng: -9.05,
      zoom: 12
    });
   
    map.addMarker({
      lat: 38.7436266,
      lng: -9.16,
      title: 'Lisbon',
      infoWindow: { content: '<p>Our Lisbon HQ</p>'}
        
    });

/* for sticky certificates */
	$('.js--section-experience').waypoint(function(direction) {
		if (direction == "down") {
			$('navbot').addClass('certificate');
		} else {
			$('navbot').removeClass('certificate');
		}
			});    
 	$('.js--section-silder').waypoint(function(direction) {
		if (direction == "down") {
			$('navbot').removeClass('certificate');
		} else {
			
		}
			}, {
  		offset: '420px'
  });       
    
 /* for sticky navigation  */   
	$('.js--section-experience').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky-nav');
		} else {
			$('nav').removeClass('sticky-nav');		}
			}, {
  		offset: '70px'
  });    
       


    
/*FINISH OF THE DOCUMENT!!!*/
});





 
