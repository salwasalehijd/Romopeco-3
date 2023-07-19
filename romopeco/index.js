var videoLine = document.querySelectorAll(".line-video-id");
 var videoCircle = document.querySelectorAll(".circle-number-id")

function arabic() {
  var html = document.getElementsByTagName("html")[0];
  html.dir = "rtl";
  html.lang = "ar";

  videoLine.forEach(x=>{
    x.classList.add("line-video-rtl");
    x.classList.remove("line-video-ltr");
    x.classList.remove("line-video");
  })



  videoCircle.forEach(s=>{
      s.classList.add("circle-number-rtl")
      s.classList.remove("circle-number")
      s.classList.remove("circle-number-ltr")

})

}

function english() {
  var html = document.getElementsByTagName("html")[0];
  html.dir = "ltr";
  html.lang = "en";
  var languageList = document.getElementById("language-list");
  languageList.classList.add("px-5");
  videoLine.forEach(x=>{
    x.classList.add("line-video-ltr");
    x.classList.remove("line-video-rtl");
    x.classList.remove("line-video");

  })


  videoCircle.forEach(s=>{
    s.classList.add("circle-number-ltr")
    s.classList.remove("circle-number")
    s.classList.remove("circle-number-rtl")

    })
   

}
// .accordion-button::after
// active part

var header = document.getElementsByClassName("navbar-nav");
var btns = document.getElementsByClassName("foractive");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}


const video = document.querySelectorAll(".video").forEach((x) => {
  x.addEventListener("mouseenter", (event) => {
    if (event.target.matches) {
          x.setAttribute("src", "imgs/img.webp")

    }
  });

  x.addEventListener("mouseleave", (event) => {
    if (event.target.matches) {
      x.removeAttribute("src")
      x.setAttribute("src","imgs/image-gif.PNG")
    }
  });
});









