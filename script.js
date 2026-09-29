const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.activity-card, .example-tile, .student-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(20px)';
  item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(item);
});

const imageViewer = document.querySelector('.image-viewer');
if (imageViewer) {
  const viewerImage = imageViewer.querySelector('.image-viewer-image');

  document.querySelectorAll('.image-open-button').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('.student-image');
      viewerImage.src = image.src;
      viewerImage.alt = image.alt;
      imageViewer.showModal();
    });
  });

  imageViewer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      imageViewer.close();
    }
  });

  imageViewer.addEventListener('click', (event) => {
    if (event.target === imageViewer) {
      imageViewer.close();
    }
  });
}
