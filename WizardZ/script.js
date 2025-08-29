let tl = gsap.timeline();

tl.from("nav, #p2 h4 , .btn1 ",{
    y: -50,
    duration: 0.7,
    opacity: 0,
    stagger: 0.09
})

tl.from(".cp1 h1",{
    x: -100,
    opacity: 0,
    stagger: 0.03
})

tl.from(".cp1 p",{
    x: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.02
})

tl.from(".btn2",{
    x: -18,
    opacity: 0,
    duration: 0.6,
})

tl.from(".cp2 img",{
    x:50,
    opacity: 0,
    duration: 2
},"-=1.5")

tl.from("#bottom img",{
    y: 50,
    duration: 1,
    opacity: 0,
    stagger: 0.08
},"-=1.2")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top -75%",
        scrub: 4
    }
})

tl2.from("#services",{
    y: 50,
    opacity: 0,
    duration: 0.1
})

tl2.from(".left",{
    x: -150,
    opacity: 0,
    duration: 0.5,
},"anim")

tl2.from(".right",{
    x: 150,
    opacity: 0,
    duration: 0.5,
},"anim")

tl2.from(".left2",{
    x: -100,
    opacity: 0,
    duration: 0.5,
},"rd")

tl2.from(".right2",{
    x: 100,
    opacity: 0,
    duration: 0.5,
},"rd")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec3",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 0%",
        scrub: 4
    }
})

tl3.from("#part1",{
    opacity: 0,
    duration: 1
})

tl3.from("#pp2",{
    opacity: 0,
    x: -150,
    duration: 1
})

tl3.from("#part3",{
    opacity: 0,
    duration: 1,
    y: 20
})


let crsr = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x: dets.x,
        y: dets.y
    })
})