// Floating paw prints
function createPaw() {
    const paw = document.createElement('div');
    paw.classList.add('paw');
    paw.style.left = Math.random()*window.innerWidth+'px';
    paw.style.animationDuration = 3+Math.random()*3+'s';
    document.getElementById('paw-container').appendChild(paw);
    setTimeout(()=>{paw.remove()},6000);
}
setInterval(createPaw,500);

// 🖼️ Image carousel scroll
const imageCarousel = document.querySelector(".image-carousel");
const imgLeftBtn = document.querySelector(".img-left-btn");
const imgRightBtn = document.querySelector(".img-right-btn");

imgRightBtn.addEventListener("click", () => {
  imageCarousel.scrollBy({ left: 320, behavior: "smooth" });
});

imgLeftBtn.addEventListener("click", () => {
  imageCarousel.scrollBy({ left: -320, behavior: "smooth" });
});
// Drag/swipe for carousel
let startX,isDown=false;
carousel.addEventListener('mousedown',e=>{ isDown=true; startX=e.pageX-carousel.offsetLeft; carousel.style.cursor='grabbing'; });
carousel.addEventListener('mouseup',()=>{ isDown=false; carousel.style.cursor='grab'; });
carousel.addEventListener('mousemove',e=>{ if(!isDown)return; e.preventDefault(); const x=e.pageX-carousel.offsetLeft; const walk=startX-x; carousel.scrollLeft+=walk; startX=x; });
carousel.addEventListener('mouseleave',()=>{ isDown=false; carousel.style.cursor='grab'; });

// Lightbox
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightbox-img');
const images=document.querySelectorAll('.carousel img');
let currentIndex=0;
function showLightbox(index){ currentIndex=index; lightbox.style.display='block'; lightboxImg.src=images[index].src; }
images.forEach((img,i)=>{ img.addEventListener('click',()=>showLightbox(i)); });
document.querySelector('.close').addEventListener('click',()=>{ lightbox.style.display='none'; });
document.querySelector('.prev').addEventListener('click',()=>{ currentIndex=(currentIndex-1+images.length)%images.length; lightboxImg.src=images[currentIndex].src; });
document.querySelector('.next').addEventListener('click',()=>{ currentIndex=(currentIndex+1)%images.length; lightboxImg.src=images[currentIndex].src; });
// Lightbox swipe
let touchStartX=0;
lightboxImg.addEventListener('touchstart',e=>{ touchStartX=e.changedTouches[0].screenX; });
lightboxImg.addEventListener('touchend',e=>{ let touchEndX=e.changedTouches[0].screenX; if(touchEndX-touchStartX>50){ currentIndex=(currentIndex-1+images.length)%images.length; lightboxImg.src=images[currentIndex].src; } else if(touchStartX-touchEndX>50){ currentIndex=(currentIndex+1)%images.length; lightboxImg.src=images[currentIndex].src; } });
lightbox.addEventListener('click',e=>{ if(e.target===lightbox) lightbox.style.display='none'; });

// Scroll-to-top button
const scrollTopBtn=document.getElementById('scrollTopBtn');
window.onscroll=function(){ if(document.body.scrollTop>200||document.documentElement.scrollTop>200){ scrollTopBtn.style.display='block'; } else { scrollTopBtn.style.display='none'; } };
scrollTopBtn.addEventListener('click',()=>{ window.scrollTo({top:0,behavior:'smooth'}); });

// Paw trail following mouse
document.addEventListener('mousemove',e=>{
    const trail=document.createElement('div');
    trail.classList.add('paw-trail');
    trail.style.left=e.pageX-12+'px'; trail.style.top=e.pageY-12+'px';
    document.getElementById('paw-container').appendChild(trail);
    setTimeout(()=>{ trail.style.opacity='0'; trail.style.transform='scale(0.5) rotate(20deg)'; setTimeout(()=>trail.remove(),500); },50);
});

// 🎬 Video carousel scroll
const videoCarousel = document.querySelector(".video-carousel");
const videoLeftBtn = document.querySelector(".video-left-btn");
const videoRightBtn = document.querySelector(".video-right-btn");

if (videoCarousel && videoLeftBtn && videoRightBtn) {
    videoRightBtn.addEventListener("click", () => {
        videoCarousel.scrollBy({ left: 320, behavior: "smooth" });
    });

    videoLeftBtn.addEventListener("click", () => {
        videoCarousel.scrollBy({ left: -320, behavior: "smooth" });
    });
}
