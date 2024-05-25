var imgs = Array.from(document.getElementsByClassName("img-item"))
var boxContainer = document.getElementById("box-container")
var boxItem = document.getElementById("box-item")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var carrntIndexSlid = 0;

// open Img
// open boxContainer & open boxItem
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click" , function (eventInfo) {
        carrntIndexSlid = imgs.indexOf(eventInfo.target)
        // click يظهر الصوره لما اعمل 
        var imgSrc = eventInfo.target.src
        boxItem.style.backgroundImage = `url(${imgSrc})`

        // click يظهر اول ما اعمل
        boxContainer.style.display = "flex"
    })
}

// Next
next.addEventListener("click", nextSlide)
function nextSlide() {
    carrntIndexSlid++
    if (carrntIndexSlid > imgs.length -1) {
        carrntIndexSlid = 0
    }

    var imgSrc = imgs[carrntIndexSlid].src
    boxItem.style.backgroundImage = `url(${imgSrc})`
}

// prev
prev.addEventListener("click", prevSlide)
function prevSlide() {
    carrntIndexSlid--
    if (carrntIndexSlid < 0 ) {
        carrntIndexSlid = imgs.length -1
    }

    var imgSrc = imgs[carrntIndexSlid].src
    boxItem.style.backgroundImage = `url(${imgSrc})`
}

// close
close.addEventListener("click" , closeSlide)
function closeSlide() {
    boxContainer.style.display = "none"
}