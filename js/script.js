let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Speech
let intro = document.querySelector('.intro');
let hello = document.querySelector('.hello');
let dev = document.querySelector('.webDev');
let thanks = document.querySelector('.thanks');
let employ = document.querySelector('.employ');

function helloIntro() {
    setTimeout(function(){
      hello.classList.toggle("displayNone");
      employ.classList.toggle("displayNone");
    },2500);

    setTimeout(function(){
        dev.classList.remove("displayNone")
        thanks.classList.toggle("displayNone");
    }, 2500);


}

helloIntro();
