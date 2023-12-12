
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);

// Trigger Form

  document.addEventListener("DOMContentLoaded", function () {
    var staticForm = document.querySelector('.static-form');
    var triggerButton = document.querySelector('.trigger');

    // Add a click event listener to the trigger button
    triggerButton.addEventListener('click', function () {
        // Toggle the "active" class on the static form
        staticForm.classList.toggle('active');
    });
     });
    

// Google Translate

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'es,pt,en'
  }, 'google_translate_element');

  var $googleDiv = $("#google_translate_element .skiptranslate");
  var $googleDivChild = $("#google_translate_element .skiptranslate div");
  $googleDivChild.next().remove();

  $googleDiv.contents().filter(function () {
      return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
  }).remove();
}


  


  


