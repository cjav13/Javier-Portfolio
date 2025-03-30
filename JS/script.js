const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');

let currentSlide = 0;

// Create dot indicators
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlides() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlides();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlides();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlides();
  });
});

// Initialize first slide
updateSlides();
