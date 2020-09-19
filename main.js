
$(document).ready(function() {

  $('.portfolio-gallery').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    imagesLoaded: true
  });

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
  
  