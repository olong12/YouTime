const WINDOW_LENGTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight
const NUM_OF_STARS = 50
// let scroll_icon = $('.fa-caret-down')[0]
// let scroll_icon_container = $('.scroll_icon')[0]
let large = false
let starW = 0
let starH = 0

// scroll_icon_container.addEventListener("mouseover", onEnter, false);
// scroll_icon_container.addEventListener("mouseout", onLeave, false);

function onEnter(){
    scroll_icon.style.visibility = 'visible'
}
function onLeave(){
    scroll_icon.style.visibility = 'hidden'
}

for(i = 0; i < NUM_OF_STARS; i++){
    if (large){
        starH = 10
        starW = 10
        makeStar(starW, starH,Math.floor(Math.random() * WINDOW_LENGTH), Math.floor(Math.random() * WINDOW_HEIGHT))
        large = !large
        starH = 5
        starW = 5
    }
    else{
        makeStar(starW, starH,Math.floor(Math.random() * WINDOW_LENGTH), Math.floor(Math.random() * WINDOW_HEIGHT))
        large = !large
    }
}

function makeStar(sw,sh,x,y){
    // 
}
