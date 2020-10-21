var slideIndexnew = 1;
showSlidesnew(slideIndexnew);

function plusSlides(n) {
  showSlidesnew(slideIndexnew += n);
}

function currentSlide(n) {
  showSlidesnew(slideIndexnew = n);
}

function showSlidesnew(n) {
  var i;
  var slidesnew = document.getElementsByClassName("mySlides-new");
  var dotsnew = document.getElementsByClassName("dot-new");
  if (n > slidesnew.length) {slideIndexnew = 1}
    if (n < 1) {slideIndexnew = slidesnew.length}
    for (i = 0; i < slidesnew.length; i++) {
      slidesnew[i].style.display = "none";
    }
    for (i = 0; i < dotsnew.length; i++) {
      dotsnew[i].className = dotsnew[i].className.replace(" active-new", "");
    }
  slidesnew[slideIndexnew-1].style.display = "block";
  dotsnew[slideIndexnew-1].className += " active-new";
}