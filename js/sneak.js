$(document).ready(function(){ 
    jQuery('.search__show').on('click',function(){
        jQuery('.search-desk__form').toggle();
        jQuery('.search__show').css("display", "none");     
    })

    jQuery('.search-desk__form--button').on('click',function(){
        jQuery('.search-desk__form').css("display", "none"); 
    });

    jQuery('.search-desk__form--button').on('click',function(){
        jQuery('.search__show').css("display", "flex"); 
    });

    jQuery('.mobile-header__button-search--icon').on('click',function(){ 
        jQuery('.search-mob__form').toggle();

        jQuery('.mobile-header__button-search--icon').css("display", "none");
        
        jQuery('.header-mobile__logo').css("display", "none");
         
        jQuery(".search-mob__form--button-back--icon").addClass("zwicon-chevron");
        jQuery(".search-mob__form--button-back--icon").removeClass("zwicon-hamburger-menu");                      
    })

    jQuery('.search-mob__form--button').on('click',function(){
       
        jQuery('.search-mob__form').toggle();
        jQuery('.mobile-header__button-search').css("display", "flex");
        jQuery('.header-mobile__logo').css("display", "flex");
        jQuery('.search-mob__form--button-back--icon').css("display", "flex");
    })

    jQuery('.mobile-header__button-search').on('click',function(){
        jQuery("#menu-mob__button .search-mob__form--button-back--icon").addClass("zwicon-hamburger-menu");
                jQuery(".zwicon-hamburger-menu").hide();
        });
        
         jQuery('#back-button .zwicon-chevron-left').on('click',function(){
            jQuery('.form_search_movil').toggle();
            jQuery('.mobile-header__button-search').css("display", "flex");
            jQuery('.header-mobile__logo').css("display", "flex");
            jQuery("#back-button .zwicon-chevron-left").show();
         });
        
         jQuery('.zwicon-chevron-left').on('click',function(){
            jQuery(".search-mob__form--button-back--icon").show();
         });
         
        jQuery(".no_link").click(function(event){
            event.preventDefault();
        });
});

jQuery(document).ready(function(){
   
    var contador = 1;
   
    jQuery('.zwicon-hamburger-menu').click(function(){
        if (contador == 1){
            jQuery('nav').animate({
                left: '0'
            });
            contador = 0;
        }   
        else{
            contador = 1;
            jQuery('nav').animate({
                left: '-100%'
            });
        }
    });

  jQuery('.header-nav__content nav ul li, .mobile-header__button-search').click(function(){
    if (contador == 0) {
      jQuery('nav').animate({
        left: '-100%'
      });
      contador = 1;
    } 
  });
   
});
