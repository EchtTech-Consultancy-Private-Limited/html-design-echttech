// var lightbox = GLightbox({ 
//     loop: true
//     });

// const accordionBtns = document.querySelectorAll(".accordion");

//  accordionBtns.forEach((accordion) => {
//  accordion.onclick = function () {
//    console.log('clicked')
//     this.classList.toggle("is-open");

//     let content = this.nextElementSibling;
//     console.log(content);

//     if (content.style.maxHeight) {
//        //this is if the accordion is open
//        content.style.maxHeight = null;
//     } else {
//        //if the accordion is currently closed
//        content.style.maxHeight = content.scrollHeight + "px";
//        console.log(content.style.maxHeight);
//     }
//  };
//  });

 $(document).ready(function() {
   $('#example').DataTable( {
       dom: 'Bfrtip',
       buttons: [
           'print'
       ]
   } );
} );


AOS.init({
   mirror: true,
 });