$(window).scroll(function () {
    $(".fade-out-scrolldown").css("opacity", 1 - $(window).scrollTop() / 200);
});

// $(window).scroll(function(){
//     $(".fade-out-scrolldown").css("opacity", 1 - $(window).scrollTop()/250);
// });
// const bg = document.getElementById('bg');
// window.addEventListener('scroll', function(){
//     bg.style.backgroundSize = 140 - +window.pageYOffset/12+'%';
//     bg.style.opacity = 1 - +window.pageYOffset/700+'';
// })
$(function () {
    $("#header").load("navbar.html");
    $("#footer").load("footer.html");
});

anime({
    targets: '.right-line',
    translateX: 270,
    delay: anime.stagger(300, { easing: 'easeOutQuad' })
});



var honey = anime({
    targets: '.honeycomb',
    scale: [
      {value: .5, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });

window.setTimeout(function () {
    $('.skill-progress').addClass("go");
}, 1000);
window.setTimeout(function () {
    $('.skill-progress2').addClass("go2");
}, 1000);

var content = document.getElementsByClassName("scroll-load");
var contentPosition = content.offsetTop;
var windowHeight = window.innerHeight;

// define your function to show the content
function showContent() {
    content.style.display = "block";
    
}

// define your function to hide the content
function hideContent() {
    content.style.display = "none";
}

// define your function to detect when the user has scrolled to the content
function onScroll() {
    var scrollPosition = window.scrollY + windowHeight;
    if (scrollPosition > contentPosition) {
        showContent();
    } else {
        hideContent();
    }
}

// add an event listener for the scroll event
window.addEventListener("scroll", onScroll);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// add an event listener for the scroll event
window.addEventListener("scroll", reveal);


// window.addEventListener('scroll', function() {
//     var myDiv = document.getElementById('scrollDisplay');
//     if (window.scrollY > 800) {
//       myDiv.style.opacity = '1';
//       honey.play();
//     } else {
//         myDiv.style.opacity = '0';
//     }
//   });

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.scale = '1';
      } else {
        entry.target.style.scale = '0';
      }
    });
  }, options);

  var myDiv = document.getElementById('scrollDisplay1');
  observer.observe(myDiv);
  var myDiv2 = document.getElementById('scrollDisplay2');
  observer.observe(myDiv2);
  var myDiv3 = document.getElementById('scrollDisplay3');
  observer.observe(myDiv3);
  var myDiv4 = document.getElementById('scrollDisplay4');
  observer.observe(myDiv4);
  var myDiv5 = document.getElementById('scrollDisplay5');
  observer.observe(myDiv5);
  var myDiv6 = document.getElementById('scrollDisplay6');
  observer.observe(myDiv6);
  var myDiv7 = document.getElementById('scrollDisplay7');
  observer.observe(myDiv7);
  var myDiv8 = document.getElementById('scrollDisplay8');
  observer.observe(myDiv8);
  var myDiv9 = document.getElementById('scrollDisplay9');
  observer.observe(myDiv9);