const startBtn = document.getElementById('start');
const landing = document.querySelector('.landing');
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentSlide = 0;

startBtn.addEventListener('click', () => {
  landing.classList.add('hidden');
  slidesContainer.classList.remove('hidden');
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
});

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
