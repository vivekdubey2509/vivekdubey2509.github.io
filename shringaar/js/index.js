$('.carousel .carousel-item').each(function () {
    var minPerSlide = 2;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) { next = next.next(); if (!next.length) { next = $(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); }
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


//   var nav=document.querySelector('nav');
//   window.addEventListener("scroll",function(){
//       if(window.pageYOffset>100){
//           nav.classList.add('bg-dark','shadow')
//       }
//       else{
//           nav.classList.remove('bg-dark','shadow')
//       }
//   })

  var thumbnails = document.getElementsByClassName('product-image');

var activeImages = document.getElementsByClassName('active');
for (var i = 0; i < thumbnails.length; i++) {
    console.log(activeImages)
    thumbnails[i].addEventListener('click', function () {

        if (activeImages.length > 0) {
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active')
        document.getElementById('product-image').src = this.src
    })
}







  