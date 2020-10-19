const WINDOW_LENGTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight
const NUM_OF_STARS = 50
const start_button = $(".btn")[0]
// let scroll_icon = $('.fa-caret-down')[0]
// let scroll_icon_container = $('.scroll_icon')[0]
let large = false
let starW = 0
let starH = 0

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



// scroll_icon_container.addEventListener("mouseover", onEnter, false);
// scroll_icon_container.addEventListener("mouseout", onLeave, false);
start_button.addEventListener("click",function(){
    window.location.href = '../MainPage/index.html'
})
