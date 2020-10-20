const backgrounds_url = ['../Img/Background_1.png', '../Img/Background_2.png']

function setBackground(){
    background = Math.floor(Math.random() * backgrounds_url.length)
    document.body.style.backgroundImage = "url("+backgrounds_url[background]+")"
}

setBackground()
