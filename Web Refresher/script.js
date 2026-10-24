// Contact Form Submission Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple user feedback
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Message Sent! ✓';
  submitBtn.style.backgroundColor = '#16a34a'; // green feedback color

  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.style.backgroundColor = '';
    contactForm.reset();
  }, 2500);
});