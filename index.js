document.addEventListener("DOMContentLoaded",
function(event) {
slideShow(slideIndex)
});

let slideIndex = 1

function plusSlides (x) {
    slideShow(slideIndex += x)
}

function currentSlide (x) {
    slideShow(slideIndex = x)
}

function slideShow (x) {
    let slides = document.getElementsByClassName("slides")
    let indicator = document.getElementsByClassName("indicator")

    if (x > slides.length) {
        slideIndex = 0
    }
    if (x < 0) {
        slideIndex = slides.length-1
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(" active", "");
    }
console.log(slides, slideIndex)
    slides[slideIndex-1].style.display = "block";
    indicator[slideIndex-1].className += " active";
}