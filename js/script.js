AOS.init();

// Typed text animation
const typedText = document.querySelector('.typed-text');
const phrases = ['Web Developer', 'UI/UX Designer', 'Tech Enthusiast'];
let currentPhrase = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (charIndex < phrases[currentPhrase].length) {
      typedText.textContent += phrases[currentPhrase][charIndex];
      charIndex++;
      setTimeout(type, 100);
    } else {
      typing = false;
      setTimeout(type, 1500);
    }
  } else {
    if (charIndex > 0) {
      typedText.textContent = phrases[currentPhrase].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      typing = true;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }
}
type();

//live time
function updateTime() {
  const timeBox = document.getElementById("live-time");
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  timeBox.textContent = timeStr;
}
setInterval(updateTime, 1000);
updateTime(); // initial call


// Video slider logic
const slides = document.querySelectorAll('.video-slide');
let slideIndex = 0;
setInterval(() => {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, 8000);

// ✅ Scroll-to-top button logic
const scrollBtn = document.getElementById('scrollToTopBtn');

// Toggle visibility on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollBtn.style.display = 'flex'; // show
  } else {
    scrollBtn.style.display = 'none'; // hide
  }
});

// Smooth scroll on click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
