let cursor = document.querySelector(".cursor")
let cursorBlur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x -10+ "px"
    cursor.style.top = dets.y -10+ "px"

    cursorBlur.style.left = dets.x -250 + "px"
    cursorBlur.style.top = dets.y -250 + "px"
})



gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top  -11%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})
