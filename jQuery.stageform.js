var i = -1;

(function($) {
  
  $.fn.stageForm = function() {

    return this.each(function() {

      var target = $(this).find('fieldset');
      target.not(':last').append('<button class="next-section" type="button">Next</button>');
      target.last().append('<button class="show-all" type="button">Display All Sections</button')
             .click(function() {
               target.fadeIn();
               $('.show-all').remove();  
               $('.next-section').remove()             
             });
             
      target.not(':first').hide();
            
      $(this).find('.next-section').click(function() {

        i++;

        $(this).parent().fadeOut('fast', function() {
          $(this).siblings('fieldset').eq(i).show('fast');
        });

      });

    });

  };
  
})(jQuery);