$(document).ready(function() {

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
  

/*
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');

    var pictures = ["bee.jpg", "tree.jpg", "pasture.jpg", "leaves.jpg"]

    var seconds = 0;
    var increment = setInterval(seconds += 1, 1000);

    function changeImage() {
      var picture = Math.floor(Math.random() * 4);
      var place = Math.floor(Math.random() * 4);
      img1.style.backgroundImage = "url('img/" + pictures[picture] + "')";
      switch (place) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        case
      }
    }

    while (true) {
      if (increment % 3 == 0) {
        changeImage();
      }
    }

*/

new WOW().init();

  // initiate full page scroll

  if ($(window).width() > 1023) {
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
  
  