const WINDOW_LENGTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight
const NUM_OF_STARS = 50
let large = false
let starW = 0
let starH = 0

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
