function scrollAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



}
function loaderCountdown(){
    var h5timer = document.querySelector("#line-part1 h5"); // Corrected selector
var grow = 0;

if (h5timer) { 
    var timer = setInterval(function () {
        if (grow < 100) {
            h5timer.innerHTML = grow++;
        } else {
            h5timer.innerHTML = grow;
            
        }
    }, 33);
}
}
function loadingAnimation(){
    var tl = gsap.timeline()
tl.from("#line h1",{
    x:-500,
    opacity:0,
    duration:0.3,
    stagger:0.4
});

tl.from("#line-part1, #line h2",{

})
tl.to("#loader",{
    opacity:0,
    duration: 0.2,
    delay: 2.0
});
tl.from("#page1",{
    y:1200,
    delay: 0,
    opacity:0,
    ease:Power4
});
tl.to("#loader",{
   display:"none"
});
tl.from("#nav-bar h3",{
    y:-50,
    opacity:0,
    delay:0,
    duration:0.4,
    stagger:0.3
    
})
tl.from("#intro1,#intro2,#intro3,#intro4",{
    y:120,
    stagger:0.2,
    opacity:0
})



}
function cursorAnimation(){
    Shery.makeMagnet("#nav-bar #right h3, #intro2 h2" , {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}
function mousemover(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
}

function footerAnimation() {
    var clutter = "";
    var clutter2 = "";
    
    document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`;
    });
    document.querySelector("#footer h1").innerHTML = clutter;
    
    document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
      clutter2 += `<span>${elem}</span>`;
    });
    document.querySelector("#footer h2").innerHTML = clutter2;
    
   
    function resetText() {
      gsap.set("#footer h1 span", { opacity: 0, scale: 0.8 });
      gsap.set("#footer h2 span", { opacity: 0, scale: 0.9 });
    }
    
    document.querySelector("#footer-text").addEventListener("mouseenter", function () {
      
      gsap.killTweensOf("#footer h1 span");
      gsap.killTweensOf("#footer h2 span");
      resetText();  
      gsap.to("#footer h1 span", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.03,
        duration: 0.5,
        ease: "power2.out",
      });
    
     
      gsap.to("#footer h2 span", {
        delay: 0.4,
        opacity: 1,
        scale: 1,
        stagger: 0.1, 
        duration: 0.5,
        ease: "power2.out", 
      });
    });
    
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
     
      gsap.killTweensOf("#footer h1 span");
      gsap.killTweensOf("#footer h2 span");
    
     
      resetText();
    

      gsap.to("#footer h1 span", {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        delay: 0.4,
        duration: 0.5,
        ease: "power2.out", 
      });
    
      
      gsap.to("#footer h2 span", {
        opacity: 0,
        scale: 0.9,
        stagger: 0.03, 
        duration: 0.5,
        ease: "power2.out", 
      });
    });
    
    
    document.querySelector("#footer-text").addEventListener("mouseleave", function () {
      
      gsap.to("#footer h1 span", {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        delay: 0.4,
        duration: 0.8, 
        ease: "power2.out",
      });
    
      gsap.to("#footer h2 span", {
        opacity: 0,
        scale: 0.9,
        stagger: 0.03,
        duration: 0.8,
        ease: "power2.out",
      });
    });        
  }

scrollAnimation()
loadingAnimation() 
loaderCountdown()
cursorAnimation()
mousemover()
footerAnimation()




