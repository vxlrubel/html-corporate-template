(function ($) {

   'use strict';

   const doc = $(document);

   class EcommerceTemplate {

      init() {
         this.header();
      }

      header() {
         alert('done')
      }

   }

   doc.ready(function () {
      const Ecommerce = new EcommerceTemplate();
      Ecommerce.init();
   });

})(jQuery);