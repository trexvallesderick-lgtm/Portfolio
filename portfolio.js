// Find every element that uses the reveal animation.
const revealItems = document.querySelectorAll(".reveal");

// IntersectionObserver adds each visible class only when an element enters the viewport.
if ("IntersectionObserver" in window) {
  // 12% visibility is enough to trigger the entrance animation.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Check whether the browser considers this element visible.
      if (entry.isIntersecting) {
        // The .visible class activates the CSS transform and opacity transition.
        entry.target.classList.add("visible");
        // Stop watching revealed elements to reduce browser work.
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  // Register every reveal element with the viewport observer.
  revealItems.forEach((item) => observer.observe(item));
} else {
  // This fallback shows all reveal content in browsers without IntersectionObserver.
  revealItems.forEach((item) => item.classList.add("visible"));
}