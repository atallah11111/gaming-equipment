const dynamicText = document.querySelector(".home .isi a span");
const words = [ "Here !", "Here !", "Here !", "Here !"];

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex)
    console.log(currentWord,currentChar);
    dynamicText.textContent = currentChar;


    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 300);
    } else if (isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1300);
    }
}
typeEffect();


var whatsappLink = document.getElementById('whatsapp-link');
whatsappLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  var phoneNumber = '6285174366076';
  var message = 'Kak saya mau beli alat gamingnya nih?';
  var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  window.open(url, '_blank');
});

var whatsappLink1 = document.getElementById('whatsapp-linkk');
whatsappLink1.addEventListener('click', function(event) {
  event.preventDefault(); 
  var phoneNumber = '6285174366076';
  var message = 'Kak saya mau beli alat gamingnya nih?';
  var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  window.open(url, '_blank');
});