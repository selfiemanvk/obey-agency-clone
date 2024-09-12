function loadingAnimation(){
    var t1 = gsap.timeline()
    t1.from(".line h1" , {
        y:150,
        stagger:0.25,
        duration:0.6,
        delay:0.5
    })
    t1.from("#line-part1 ",{
        opacity:0,
        onStart : function(){
            
    var h5Timer = document.querySelector("#line-part1 h5");
    var grow = 0;
    setInterval(function(){
        if(grow<100){
            grow++;
            h5Timer.innerHTML = grow;
        }
        else{
            h5Timer.innerHTML = grow;
        }
    } , 30)
        }
    })
    
    t1.to(".line h2",{
        animationName: "anime",
        opacity:1,
    })
    
    t1.to("#loader",{
        opacity : 0,
        duration : 0.2,
        delay: 4
    })
    
    t1.from("#page1",{
        y:1200,
        delay:0.2,
        duration:0.5,
        opacity:0,
        ease: Power4
    })
    
    t1.to("#loader",{
        display :"none",
    })

    t1.from("#nav",{
        opacity:0
    })
    t1.from("#hero1 h1 ,#hero2 h1 , #hero3 h2 , #hero4 h1",{
        y: 120,
        staagger:0.2
    })
}


function cursarAnimation(){
    document.addEventListener("mousemove" , function(dets){
        gsap.to("#crsr" ,{
            left : dets.x,
            top: dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
       
      });
}
loadingAnimation();

cursarAnimation();

