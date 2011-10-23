var i = -1;

(function($) {
    
  $.fn.stageForm = function(options) {
  
    var settings = {progress : false,
                    progressColor : '#ccc',
                    nextText : 'Next',
                    previousText : 'Previous',
                    animation : 'fade'};
    
    function changeFieldset(sectionNumber,currContext) {
      switch (settings.animation) {
        
        case 'fade':
         $(currContext).parent().fadeOut('fast', function() {
           $(this).siblings('fieldset').eq(sectionNumber).show('fast');
         });
        break;
       
        case 'slide':
          $(currContext).parent().slideUp('fast', function() {
            $(this).siblings('fieldset').eq(sectionNumber).slideDown('fast');
          });
        break;
        
/* CURRENTLY BROKEN
        case 'swingOff':
          $(currContext).parent().animate({
          
            right : '99999px'
          
          }.show(), function() {
            $(this).siblings('fieldset').eq(sectionNumber).animate({    
              left: '0px'
            });
      
          });
        break;
        
*/
      };
    
    };
    
    return this.each(function() {
    
      if (options) { $.extend( settings, options );};
      
      var target = $(this).find('fieldset'),
          submit =  $(this).find('[type="submit"]'),
          totalNumSections = 0;
      
      target.not(':first').append('<button class="previous-section" type="button">' + settings.previousText + '</button>')
      target.not(':last').append('<button class="next-section" type="button">' + settings.nextText + '</button>');
      target.last().append('<button class="show-all" type="button">Display All Sections</button')
             .click(function() {
               target.fadeIn();
               submit.fadeIn();
               $('.show-all,.next-section,.previous-section').remove();              
             });
             
      target.not(':first').hide();
      submit.hide();
      target.each(function() {  totalNumSections++  });
      
      if(settings.progress) {  
                  
        $(this).before('<div style="height: 25px; border: 1px solid #ccc; background: #fff"><div class="progress" style="height: 100%; background:' + settings.progressColor + ';">&nbsp;</div></div>');
      };
            
      $(this).find('.next-section').live('click', function() {
        i++;
        changeFieldset(i,this);
                
        if(i == totalNumSections - 1) {
          submit.show();
        };
                
        if(settings.progress) { 
          
          var full = 100,
              click_counter = 0,
              pre = $('.progress').width(),
              single = full / totalNumSections,
              completeWidth = 0;
              
          click_counter++;
          completeWidth = single * click_counter; 
          completedWidth = completedWidth + 33;
          
          $('.progress').animate({
            width: "" + completeWidth + "%",
          })
          
        };
        
      });
      
      
      $(this).find('.previous-section').click(function() {
        
        i--;          
        changeFieldset(i,this);

      });
      
    });

  };
  
})(jQuery);