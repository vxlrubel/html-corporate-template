(function ($) {

   'use strict';

   const doc = $(document);

   class AppColor {
      color() {
         return {
            theme: '#5e17eb'
         }
      }
   }

   // initiate the color
   const App = new AppColor();

   class EcommerceTemplate {

      init() {
         this.header();
         this.carousel();
         this.progressbar();
      }

      header() {
         // clone main menu and inser to responsive mobile menu
         $('.menu').clone().attr('class', 'm-menu').appendTo('.responsive-mobile-menu');

         // menu toggle
         $('.menu-toggle').on('click', function (e) {
            e.preventDefault();
            let iconClass = $(this).children('i');

            // change the toggle icon frequently
            if (iconClass.hasClass('fa-bars-staggered')) {
               iconClass.removeClass('fa-bars-staggered').addClass('fa-xmark');
            } else {
               iconClass.addClass('fa-bars-staggered').removeClass('fa-xmark');
            }

            // slide toggle the mobile responsive menu
            $('.responsive-mobile-menu').stop().slideToggle(300);

         });

         // add icon where is submenu available
         $('.m-menu')
            .find('.has-submenu')
            .children('a')
            .addClass('resposive-submenu-toggle')
            .append('<i class="fa-solid fa-angle-down"></i>');

         // responsive submenu toggle
         $('.resposive-submenu-toggle')
            .on('click', function (e) {
               e.preventDefault();
               let iconClass = $(this).children('i')
               if (iconClass.hasClass('fa-angle-down')) {
                  iconClass.removeClass('fa-angle-down').addClass('fa-angle-up');
                  $(this).siblings('ul.submenu').stop().slideDown(250);
               } else {
                  iconClass.addClass('fa-angle-down').removeClass('fa-angle-up');
                  $(this).siblings('ul.submenu').stop().slideUp(250);
               }
            });

         // add angle down icon to submenu link
         $('.menu')
            .find('li.has-submenu')
            .children('a').addClass('menu-has-submenu-link')
            .append('<i class="fa-solid fa-angle-down"></i>');

      }

      carousel() {
         // hero home slider
         (() => {
            let args = {
               items: 1,
               nav: true,
               dots: false,
               lazyLoad: true,
               autoplay: true,
               autoplayHoverPause: true,
               smartSpeed: 1000,
               loop: true
            }
            $('.app-hero-slider').owlCarousel(args);
         })();

         // partners slider
         (() => {
            let items = {
               0: { items: 2 },
               576: { items: 3 },
               768: { items: 4 },
               992: { items: 6 }
            }
            let args = {
               loop: true,
               margin: 50,
               responsive: items
            }
            $('.partners').owlCarousel(args);
         })();
      }

      progressbar() {

         // this is the default values
         //   valElement: 'p',
         //   strokeWidth: 20,
         //   bgColor: '#d9d9d9',
         //   ringColor: '#d53f3f',
         //   textColor: '#9a9a9a',
         //   fontSize: '12px',
         //   fontWeight: 'normal'


         // practice area progress bar
         (() => {
            let options = {
               strokeWidth: 5,
               ringColor: App.color().theme,
               fontSize: '30px'
            }

            // apply to process bar 
            $('.app-process-bar').percentageLoader(options);

         })();
      }

   }

   doc.ready(function () {

      const Ecommerce = new EcommerceTemplate();
      Ecommerce.init();
      $('.test').lightbox();
   });

})(jQuery);