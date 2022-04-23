

window.addEventListener("scroll", function(){
    var navScroll = document.getElementById("nav")
    navScroll.classList.toggle("fixed", window.scrollY > 10)
})


var day = new Date();
var year = day.getFullYear()
document.getElementById("demo").innerHTML = year;

function navBack(){
    var nav = document.getElementById("nav").classList.toggle('change');
}