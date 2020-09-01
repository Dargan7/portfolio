
$(document).ready(function() {

  // setting swirl animation canvas width and height based on screen size
  const canvas = document.getElementById('swirl1_surface');

  var width = $(window).width();
  var height = $(window).height();

  if (width < height) { // phone
    canvas.setAttribute("width", width-(width*.1));
    canvas.setAttribute("height", width-(width*.1));
  } else { // monitor
    canvas.setAttribute("width", height-(height*.2));
    canvas.setAttribute("height", height-(height*.2));
  }

    // typing animation
    (function($) {
      $.fn.writeText = function(content) {
        var result = $.Deferred();
          var contentArray = content.split(""),
              current = 0,
              elem = this;
          setInterval(function() {
              if(current < contentArray.length) {
                  elem.text(elem.text() + contentArray[current++]);
              } else {
                result.resolve();
              }
          }, 80);
          return result.promise();
      };
      
    })(jQuery);

    // input text for typing animation 
    $("#holder").writeText("EVELOPER. ").then(function() {
      setTimeout(1000);
      return $("#holder").writeText("CREATOR.");
    });

    $('#holder2').writeText("CROLL DOWN.");
  


  new WOW().init();

  // initiate full page scroll
  if ($(window).width()) {
    $('#fullpage').fullpage({
      css3: true,
      navigation: false,
      navigationPosition: 'left',
      slidesNavigation: true,
      controlArrows: false,
      navigationTooltips: ['home', 'about', 'portfolio', 'contact'],
      anchors: ['home', 'about', 'portfolio', 'contact'],
      scrollHorizontally: true,
      fitToSection: false,
      /*
      afterLoad: function ( anchorLink, index){
        var loadedSection = $(this);
  
        //using index
        if(index==1){
          $('.header-links ul li').each(function(){
            $(this).css('visibility','visible')
          });
        }
  
        else if(index!=1){
          $('.header-links ul li').each(function(){
            $(this).css('visibility','hidden')
          });
        }
        
      } */
    });
   
  
    // move section down one
    $(document).on('click', '#moveDown', function(){
      $.fn.fullpage.moveSectionDown();
    });
  
    // fullpage.js link navigation
    $(document).on('click', '.about', function(){
      $.fn.fullpage.moveTo(2);
    });
  
    $(document).on('click', '.portfolio', function(){
      $.fn.fullpage.moveTo(3);
    });
  
    $(document).on('click', '.contact', function(){
      $.fn.fullpage.moveTo(4);
    });
  
    // smooth scrolling
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }
      });
    });
  }
    
});
  
  