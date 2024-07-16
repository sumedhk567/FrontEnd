const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function effectJs(){
    let elecontainerId = document.querySelector('#ele-container')
// console.log(elecontainerId)
let framesId = document.querySelector('#frames')
// console.log(framesId)
elecontainerId.addEventListener('mouseenter',function(){
    // alert('Hey Kelya')
    framesId.style.display = 'block'
})

elecontainerId.addEventListener('mouseleave',function(){
    framesId.style.display='none'
})

let elemsclass = document.querySelectorAll('.elems')
// console.log(elemsclass)

elemsclass.forEach((e)=>{
    e.addEventListener('mouseenter',function(){
        let imglink = e.getAttribute('data-image')
        // console.log("hello")
        framesId.style.backgroundImage = `url(${imglink})`
        })
    })


    let swiperSlide = document.querySelectorAll('.swiper-slide')

    // console.log(swiperSlide)

    swiperSlide.forEach((ele)=>{
        // console.log(ele)
        ele.style.width = '35%'
        // console.log("Arambha")

    })

}
effectJs();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });