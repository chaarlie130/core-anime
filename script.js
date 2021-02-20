var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "-100px";
  } else {
    document.getElementById("header").style.top = "0";
  }
  prevScrollpos = currentScrollPos;
}