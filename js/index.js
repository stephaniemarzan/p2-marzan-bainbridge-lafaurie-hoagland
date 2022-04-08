const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function (){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach( n => n.addEventListener("click", function(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.read-more-text');

readMoreBtn.addEventListener("click", function(e){
    text.classList.toggle('show-more');
    if (readMoreBtn.innerText === "Read On"){
        readMoreBtn.innerText = "Read Less";
    }
 else {
    readMoreBtn.innerText = "Read More";
  }
})

function openDonation(evt, dollarAmount) {
    var i;
    donationAmount = document.getElementsByClassName ("donation-amount");
    for (i = 0; i < donationAmount.length; i++) {
        donationAmount[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i<tablinks.length; i++) {
    }
    document.getElementById(dollarAmount).style.display = "block";
}

