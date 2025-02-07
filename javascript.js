
// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

 // JavaScript
 $(document).ready(function(){
    // Initialize Owl Carousels
    $(".photo-carousel").owlCarousel({
     

      center: true,
items: 3, // Default 3 items
loop: true,
margin: 20,
autoplay: true, // Auto-play enable karne ke liye
autoplayTimeout: 3000, // 3 seconds delay
responsive: {
  0: {
      items: 1 // Mobile view me 1 item
  },
  600: {
      items: 2 // Tablet view me 2 items
  },
  1000: {
      items: 3 // Large screen par 3 items
  }
}
    });
  
    $(".video-carousel").owlCarousel({
      center: true,
      items: 3,
      loop: true,
      margin: 20,
      responsive:{
        0:{
          items:1
        },
        768:{
          items:3
        }
      }
    });
  
    // Tab functionality
    $(".tab-button").click(function(){
      const tabId = $(this).data('tab');
      $(".tab-content").removeClass('active');
      $(".tab-button").removeClass('active');
      $(this).addClass('active');
      $("#" + tabId).addClass('active');
      
      // Refresh carousel on tab change
      if(tabId === 'photos') {
        $(".photo-carousel").trigger('refresh.owl.carousel');
      } else {
        $(".video-carousel").trigger('refresh.owl.carousel');
      }
    });
  
    // Handle scale animation
    $('.owl-carousel').on('translate.owl.carousel', function(e) {
      $(this).find('.owl-item').removeClass('z-above');
      $(this).find('.owl-item.active').eq(e.item.index).addClass('z-above');
    });
  });