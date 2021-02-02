  $(document).ready(function() {
    $('#myCarousel').on('slid.bs.carousel', function() {
  });   
});
function changeDef(event){
  console.log(event.target);
  document.getElementById("play-btn").style.display = "block";
}
function playNone(event){
  console.log(event.target);
  document.getElementById("play-btn").style.display = "none";
}
let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
    spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
$('.carousel').carousel({ interval: false });
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 0
  })
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('wrapper');
    li = ul.getElementsByTagName('li');
    inp = document.getElementById('myinput');

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "inline-block";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}