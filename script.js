function loader() {
    gsap.from(".line h1",{
        y:150,
        stagger:0.5,
        duration:0.6,
        delay:0.5,
    });
    var h5timer = document.querySelector(".line1-part1 h5");
    var tv = document.querySelector(".line h2");
    var grow  = 0;
    setInterval(() => {
        
        if(grow<100){
            h5timer.innerHTML = grow++
        }else{
            h5timer.innerHTML = grow;
           
        }
        if(grow > 95){
            tv.innerHTML = "Now"
       }
    
    },40); 
    var tl = gsap.timeline()
    tl.to("#loader",{
        opacity:0,
        duration:0.4,
        delay:4.5   ,
    })
    tl.from("#page1",{
        delay:0.2,
        y:1200,
        opacity:0
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from(".hero h1",{
        y:120,
        stagger:0.2
    })
};
loader();

function cursoranimation() {
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    });
    
    Shery.makeMagnet("#nav-part2 h4"); 
}
cursoranimation();

