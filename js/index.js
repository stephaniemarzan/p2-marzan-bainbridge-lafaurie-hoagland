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

const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://v6.exchangerate-api.com/v6/6d7fdfaf4490b6cd52360f33/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
