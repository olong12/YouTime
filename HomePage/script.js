const WINDOW_LENGTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight
const start_button = $(".btn")[0]
const backgrounds_url = ['../Img/Background_1.png', '../Img/Background_2.png']

// let scroll_icon = $('.fa-caret-down')[0]
// let scroll_icon_container = $('.scroll_icon')[0]


$(".example_points1")[0].innerHTML = Math.floor(Math.random() * 91)+10
$(".example_points2")[0].innerHTML = Math.floor(Math.random() * 91)+10
$(".example_points3")[0].innerHTML = Math.floor(Math.random() * 91)+10
function setBackground(){
    background = Math.floor(Math.random() * backgrounds_url.length)
    document.body.style.backgroundImage = "url("+backgrounds_url[background]+")"
}
function onEnter(){
    scroll_icon.style.visibility = 'visible'
}
function onLeave(){
    scroll_icon.style.visibility = 'hidden'
}

//turn out you need js to make a sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// scroll_icon_container.addEventListener("mouseover", onEnter, false);
// scroll_icon_container.addEventListener("mouseout", onLeave, false);
setBackground()
start_button.addEventListener("click",function(){
    window.location.href = '../MainPage/index.html'
})