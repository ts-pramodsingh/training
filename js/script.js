
$(document).ready(function(){



  
  $(".menu-close-btn, .first-menu .back-btn").click(function(){
    $("#MegaMenu").addClass("hide");
    $("#megamenu-box").addClass("hide");
  });
  
  
   
   $(".menu-head").click(function(){
  
    $("#megamenu-box").addClass("hide");
  });
  
 
  

  
 if( screen.width <= 480 ) { 
 
    
   
   
  $("#menu-button").click(function(){
    $("#MegaMenu").removeClass("hide");
    $("#megamenu-box").removeClass("hide");
  });
  
   $("#menu-cat").click(function(){
	  
    $("#menu-cat ul").show();
  });
  
  
  $(document).click(function (e){
  
	var container = $(".toogle-search-icon");

	if (!container.is(e.target)){

		  $("#homepage-search-form form").hide();
		
	}
	
	else {
		
		  $("#homepage-search-form form").show();
	}

}); 

  $("#all-courses").click(function(){
 
    $("#megamenu-box").removeClass("hide-sm");
    $("#megamenu-box").removeClass("hide");
      
  });
  
    

  
  
  $(".menu .back-btn").click(function(){
 
    $("#megamenu-box").addClass("hide-sm");
      
	  
  }); 
  
  $(".menu-item a").click(function(){
   $(this).parent().toggleClass("active");
 
  
    });
  


 }
 
 else {
 
  $(".menu-item").hover(function(){
	  $(".menu").find("li").removeClass("active");
  $(this).addClass("active");  
  
    });
 
   $(".ad-item").addClass("active");
 
    $("#menu-button, #MegaMenu").hover(function(){
    $("#MegaMenu").removeClass("hide");
    $("#megamenu-box").removeClass("hide");
  });

  
  $("#menu-button, #megamenu-box, #MegaMenu").mouseleave(function(){
    $("#MegaMenu").addClass("hide");
    $("#megamenu-box").addClass("hide");
  });
  
  
  
  $("#megamenu-mobile-overlay").click(function(){
    $("#MegaMenu").toggleClass("hide");
    $("#megamenu-box").toggleClass("hide");
      
  }); 
  
 
 
 }
	
});