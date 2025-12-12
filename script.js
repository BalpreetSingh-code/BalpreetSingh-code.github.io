// ============================================
// MOBILE NAVIGATION
// ============================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Toggle mobile menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when clicking any nav link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// ============================================
// SMOOTH SCROLLING
// ============================================
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Scroll to section with offset for fixed navbar
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ============================================
// NAVBAR SCROLL EFFECTS
// ============================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add shadow and darken navbar when scrolled down
  if (currentScroll > 100) {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.98)";
    navbar.style.boxShadow = "0 2px 15px rgba(0, 255, 0, 0.4)";
  } else {
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 255, 0, 0.3)";
  }
});

// ============================================
// HERO TITLE TYPING EFFECT
// ============================================
const heroTitle = document.querySelector(".typing-text");

if (heroTitle) {
  const originalText = heroTitle.innerHTML;
  heroTitle.innerHTML = "";

  let i = 0;
  const typingSpeed = 50;
  let htmlBuffer = "";
  let insideTag = false;

  function typeWriter() {
    if (i < originalText.length) {
      const char = originalText.charAt(i);

      // Check if we're inside an HTML tag
      if (char === "<") {
        insideTag = true;
      }

      htmlBuffer += char;

      // When tag closes, update the display
      if (char === ">") {
        insideTag = false;
        heroTitle.innerHTML = htmlBuffer;
      } else if (!insideTag) {
        heroTitle.innerHTML = htmlBuffer;
      }

      i++;
      setTimeout(typeWriter, insideTag ? 0 : typingSpeed);
    }
  }

  // Start typing after a short delay
  setTimeout(typeWriter, 1000);
}

// ============================================
// SCROLL ANIMATIONS FOR CARDS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

// Animate elements when they scroll into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply animation to these elements
const animateElements = document.querySelectorAll(
  ".project-card, .skill-category, .timeline-item, .highlight-item"
);
animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// ============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ============================================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  // Find which section is currently visible
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  // Highlight the corresponding nav link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ============================================
// PROJECT CARD HOVER EFFECT
// ============================================
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  // Change border to yellow on hover
  card.addEventListener("mouseenter", function () {
    this.style.borderColor = "#ffff00";
  });

  // Change back to green when not hovering
  card.addEventListener("mouseleave", function () {
    this.style.borderColor = "#00ff00";
  });
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function createScrollToTop() {
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollBtn.className = "scroll-to-top";
  scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 4px;
        background: transparent;
        color: #00ff00;
        border: 2px solid #00ff00;
        font-size: 1.2rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        transition: all 0.3s ease;
    `;

  document.body.appendChild(scrollBtn);

  // Show button when scrolled down
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll to top when clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Hover effects for the button
  scrollBtn.addEventListener("mouseenter", () => {
    scrollBtn.style.background = "#00ff00";
    scrollBtn.style.color = "#000000";
    scrollBtn.style.boxShadow = "0 0 20px rgba(0, 255, 0, 0.8)";
  });

  scrollBtn.addEventListener("mouseleave", () => {
    scrollBtn.style.background = "transparent";
    scrollBtn.style.color = "#00ff00";
    scrollBtn.style.boxShadow = "0 0 10px rgba(0, 255, 0, 0.5)";
  });
}

// Initialize the scroll to top button
createScrollToTop();

// ============================================
// TERMINAL WINDOW HOVER GLOW
// ============================================
const terminalWindows = document.querySelectorAll(".terminal-window");

terminalWindows.forEach((window) => {
  // Increase glow on hover
  window.addEventListener("mouseenter", function () {
    this.style.boxShadow =
      "0 0 40px rgba(0, 255, 0, 0.6), inset 0 0 50px rgba(0, 255, 0, 0.1)";
  });

  // Return to normal glow
  window.addEventListener("mouseleave", function () {
    this.style.boxShadow =
      "0 0 30px rgba(0, 255, 0, 0.4), inset 0 0 50px rgba(0, 255, 0, 0.05)";
  });
});

// ============================================
// ACTIVE NAV LINK STYLING
// ============================================
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: #ffff00 !important;
        text-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
    }
`;
document.head.appendChild(style);
