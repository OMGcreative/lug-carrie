// add_active .js

// $.noConflict();
jQuery(document).ready(function( $ ) {
    // $("#getstarted").removeClass("active");
    // $(".fullscreen").removeClass("active");
    // $(".fullscreen").hide();
    $( ".getstarted" ).click(function(e){
      e.preventDefault()
      //
      $(this).toggleClass( "active" );
      $( ".fullscreen" ).toggleClass( "active" );
      $( "body" ).toggleClass( "no_scroll" );
      // $("#header").toggleClass("reverse");
      //
      if ($( this ).hasClass( "active") ) {
        $( "#getstarted" ).html("Close");
        $("#header").removeClass("reverse");
      } 
      else if ($( "#header" ).hasClass( "reverse") ) {    
        $( "#getstarted" ).html("Get Started");
        $("#header").removeClass("reverse");
      } 
      else {
        $( this ).html("Get Started");
        if(!$("#header").hasClass("shrink")){
          $("#header").addClass("reverse");
        }
      }
  });
});