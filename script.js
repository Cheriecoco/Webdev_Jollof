// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// JavaScript for the Slideshow
let slideIndex = 0; // Start with the first slide

// Function to show a specific slide
function showSlide(n) {
  const slides = document.querySelectorAll(".Containers");

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Ensure slideIndex is within bounds
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

// Function to advance to the next slide
function plusSlides(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

// Display the first slide
showSlide(slideIndex);

// Set an interval to automatically advance the slideshow every 3 seconds (3000 milliseconds)
setInterval(() => plusSlides(1), 7000); // Start with 0 (first slide)

