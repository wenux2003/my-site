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

    // Video slider logic
    const slides = document.querySelectorAll('.video-slide');
    let slideIndex = 0;
    setInterval(() => {
      slides[slideIndex].classList.remove('active');
      slideIndex = (slideIndex + 1) % slides.length;
      slides[slideIndex].classList.add('active');
    }, 8000);

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });