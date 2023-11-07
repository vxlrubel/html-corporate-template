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
         this.appEvents();
         this.setCurrentDate();
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

            // apply slider to hero section
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

            // apply slider to partners section
            $('.partners').owlCarousel(args);
         })();

         // review slider
         (() => {
            let args = {
               items: 1,
               loop: true,
               margin: 0,
               lazyLoad: true,
               autoplay: true,
               smartSpeed: 1000
            }

            // apply slider to review section
            $('.review-items').owlCarousel(args);

         })();

         (() => {
            let items = {
               0: { items: 1 },
               576: { items: 1 },
               768: { items: 2 },
               992: { items: 3 }
            }
            let args = {
               items: 1,
               loop: true,
               margin: 30,
               responsive: items
            }
            $('.blog-post-items').owlCarousel(args);
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
      appEvents() {

         // hide and show scroll button
         const goTop = () => {
            let height = $(window).scrollTop();

            if (height > 300) {
               $('.scroll-to-top').addClass('d-inline-flex');
               console.log('done');
            } else {
               $('.scroll-to-top').removeClass('d-inline-flex');
               console.log('none');
            }
         }

         goTop();

         $(window).on('scroll', () => {
            goTop();
         });

         // scroll to top action
         $('.scroll-to-top').on('click', (e) => {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 750);
         })
      }
      setCurrentDate() {
         // get current date
         var currentDate = new Date();
         var year = currentDate.getFullYear();
         var month = currentDate.getMonth() + 1;
         var day = currentDate.getDate();
         // Format the date as a string (e.g., "DD-MM-YYYY")
         var getCurrentDate = (day < 10 ? '0' : '') + day + '-' + (month < 10 ? '0' : '') + month + '-' + year;

         $('.current-date').empty().html(getCurrentDate);
      }

   }

   // initiate the programms after load the document
   doc.ready(function () {
      const Ecommerce = new EcommerceTemplate();
      Ecommerce.init();
   });

})(jQuery);