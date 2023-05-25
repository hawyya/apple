let span = document.querySelector('.span-header')
let menu = document.querySelector('.ulmenu')
let cross = document.querySelector('.close')
span.addEventListener('click',function(){
    if(menu.style.display == ('block')){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'block'
        span.style.display = 'none'
    }

    if(span.style.display == ('block')){
        span.style.display = 'none'
    }
})

cross.addEventListener('click',function(){
    if(menu.style.display == ('block')){
        menu.style.display = 'none'
        span.style.display = 'block'
    }
})

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });


