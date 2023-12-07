



const prev = document.querySelector(".prev-card")
const next = document.querySelector(".next-card")
 const slide = document.querySelector(".slide-item")

prev.addEventListener("click",()=>{
    slide.style.transform = `translateX(${0}vw)`;
})


next.addEventListener("click",()=>{
    slide.style.transform = `translateX(${-18}vw)`;
})