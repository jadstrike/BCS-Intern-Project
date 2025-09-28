/**
 * Portfolio Website JavaScript
 * Handles form validation, dark mode toggle, and smooth interactions
 */

(function () {
  "use strict";

  // DOM elements
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");
  const contactForm = document.getElementById("contactForm");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navList = document.getElementById("navList");
  const successModal = document.getElementById("successModal");
  const modalClose = document.querySelector(".modal-close");
  const modalBtn = document.querySelector(".modal-btn");

  // Form validation patterns
  const validationPatterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^[\+]?[1-9][\d]{0,15}$/,
    name: /^[a-zA-Z\s'-]{2,50}$/,
  };

  // Validation messages
  const validationMessages = {
    firstName: {
      required: "First name is required",
      pattern:
        "First name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes",
      minLength: "First name must be at least 2 characters",
    },
    lastName: {
      required: "Last name is required",
      pattern:
        "Last name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes",
      minLength: "Last name must be at least 2 characters",
    },
    email: {
      required: "Email address is required",
      pattern: "Please enter a valid email address",
    },
    phone: {
      pattern: "Please enter a valid phone number",
    },
    message: {
      required: "Message is required",
      minLength: "Message must be at least 10 characters",
    },
  };

  /**
   * Initialize the application
   */
  function init() {
    initializeTheme();
    initializeMobileMenu();
    initializeModal();
    initializeFormValidation();
    initializeSmoothScrolling();
    initializeNavigation();
    handleFormSubmission();
  }

  /**
   * Initialize mobile menu functionality
   */
  function initializeMobileMenu() {
    if (!mobileMenuToggle || !navList) return;

    mobileMenuToggle.addEventListener("click", toggleMobileMenu);

    // Close mobile menu when clicking on nav links
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenuToggle.contains(e.target) && !navList.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
      }
    });
  }

  /**
   * Toggle mobile menu visibility
   */
  function toggleMobileMenu() {
    const isExpanded =
      mobileMenuToggle.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  /**
   * Open mobile menu
   */
  function openMobileMenu() {
    mobileMenuToggle.setAttribute("aria-expanded", "true");
    navList.classList.add("mobile-open");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  /**
   * Close mobile menu
   */
  function closeMobileMenu() {
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    navList.classList.remove("mobile-open");
    document.body.style.overflow = ""; // Restore scrolling
  }

  /**
   * Initialize modal functionality
   */
  function initializeModal() {
    if (!successModal || !modalClose || !modalBtn) return;

    // Close modal when clicking close button
    modalClose.addEventListener("click", closeModal);

    // Close modal when clicking "Got it!" button
    modalBtn.addEventListener("click", closeModal);

    // Close modal when clicking overlay
    successModal.addEventListener("click", (e) => {
      if (
        e.target === successModal ||
        e.target.classList.contains("modal-overlay")
      ) {
        closeModal();
      }
    });

    // Close modal on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && successModal.classList.contains("show")) {
        closeModal();
      }
    });
  }

  /**
   * Show success modal
   */
  function showModal() {
    if (!successModal) return;

    successModal.classList.add("show");
    successModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    // Focus the modal for accessibility
    const modalTitle = document.getElementById("modalTitle");
    if (modalTitle) {
      modalTitle.focus();
    }
  }

  /**
   * Close success modal
   */
  function closeModal() {
    if (!successModal) return;

    successModal.classList.remove("show");
    successModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // Restore scrolling

    // Return focus to submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.focus();
    }
  }

  /**
   * Initialize theme toggle functionality
   */
  function initializeTheme() {
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // Add click event listener
    themeToggle.addEventListener("click", toggleTheme);

    // Listen for system theme changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          setTheme(e.matches ? "dark" : "light");
        }
      });
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  }

  /**
   * Set the theme and update UI
   */
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", theme);
  }

  /**
   * Initialize form validation
   */
  function initializeFormValidation() {
    const formInputs = contactForm.querySelectorAll("input, textarea");

    formInputs.forEach((input) => {
      // Real-time validation on blur
      input.addEventListener("blur", () => validateField(input));

      // Clear errors on input
      input.addEventListener("input", () => clearFieldError(input));

      // Validate on paste
      input.addEventListener("paste", () => {
        setTimeout(() => validateField(input), 10);
      });
    });
  }

  /**
   * Validate a single form field
   */
  function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const isRequired = field.hasAttribute("required");
    let isValid = true;
    let errorMessage = "";

    // Clear previous error
    clearFieldError(field);

    // Required field validation
    if (isRequired && !fieldValue) {
      isValid = false;
      errorMessage =
        validationMessages[fieldName]?.required || "This field is required";
    }

    // Pattern validation for non-empty fields
    if (fieldValue && validationPatterns[fieldName]) {
      if (!validationPatterns[fieldName].test(fieldValue)) {
        isValid = false;
        errorMessage =
          validationMessages[fieldName]?.pattern || "Invalid format";
      }
    }

    // Special validations
    if (fieldValue && isValid) {
      switch (fieldName) {
        case "firstName":
        case "lastName":
          if (fieldValue.length < 2) {
            isValid = false;
            errorMessage = validationMessages[fieldName].minLength;
          }
          break;
        case "phone":
          // Phone is optional, but if provided, must be valid
          if (
            fieldValue &&
            !validationPatterns.phone.test(
              fieldValue.replace(/[\s\-\(\)]/g, "")
            )
          ) {
            isValid = false;
            errorMessage = validationMessages[fieldName].pattern;
          }
          break;
        case "message":
          if (fieldValue.length < 10) {
            isValid = false;
            errorMessage = validationMessages[fieldName].minLength;
          }
          break;
      }
    }

    // Display error if invalid
    if (!isValid) {
      showFieldError(field, errorMessage);
    }

    return isValid;
  }

  /**
   * Show error message for a field
   */
  function showFieldError(field, message) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.setAttribute("aria-live", "assertive");
    }

    field.setAttribute("aria-invalid", "true");
    field.classList.add("error");
  }

  /**
   * Clear error message for a field
   */
  function clearFieldError(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
      errorElement.textContent = "";
    }

    field.removeAttribute("aria-invalid");
    field.classList.remove("error");
  }

  /**
   * Validate entire form
   */
  function validateForm() {
    const formInputs = contactForm.querySelectorAll(
      "input[required], textarea[required]"
    );
    let isFormValid = true;

    formInputs.forEach((input) => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    return isFormValid;
  }

  /**
   * Handle form submission
   */
  function handleFormSubmission() {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Validate form
      if (!validateForm()) {
        // Focus first invalid field
        const firstError = contactForm.querySelector('[aria-invalid="true"]');
        if (firstError) {
          firstError.focus();
        }
        return;
      }

      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Add loading class for animation
      submitButton.classList.add("loading");

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove("loading");
        showModal();
      }, 2000);
    });
  }

  /**
   * Initialize smooth scrolling for navigation links
   */
  function initializeSmoothScrolling() {
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Only handle hash links
        if (href.startsWith("#")) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            // Close mobile menu if open
            closeMobileMenu();

            // Update active nav link
            updateActiveNavLink(link);

            // Smooth scroll to target
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  /**
   * Update active navigation link
   */
  function updateActiveNavLink(activeLink) {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    activeLink.classList.add("active");
  }

  /**
   * Initialize navigation scroll spy
   */
  function initializeNavigation() {
    const sections = document.querySelectorAll("section[id]");

    // Create intersection observer for scroll spy
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const correspondingLink = document.querySelector(
            `a[href="#${sectionId}"]`
          );
          if (correspondingLink) {
            updateActiveNavLink(correspondingLink);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }

  /**
   * Utility function to sanitize input
   */
  function sanitizeInput(input) {
    return input.trim().replace(/[<>]/g, "");
  }

  /**
   * Handle keyboard navigation for theme toggle
   */
  function initializeKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // Alt + T for theme toggle
      if (e.altKey && e.key === "t") {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  /**
   * Add loading states and error handling
   */
  function initializeErrorHandling() {
    window.addEventListener("error", (e) => {
      console.error("JavaScript error:", e.error);
    });

    window.addEventListener("unhandledrejection", (e) => {
      console.error("Unhandled promise rejection:", e.reason);
    });
  }

  /**
   * Initialize accessibility features
   */
  function initializeAccessibility() {
    // Add skip link functionality
    const skipLink = document.querySelector(".skip-link");
    if (skipLink) {
      skipLink.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute("href"));
        if (target) {
          target.focus();
          target.scrollIntoView();
        }
      });
    }

    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, select"
    );
    interactiveElements.forEach((element) => {
      if (
        !element.hasAttribute("tabindex") &&
        element.getAttribute("tabindex") !== "0"
      ) {
        element.setAttribute("tabindex", "0");
      }
    });
  }

  /**
   * Initialize performance optimizations
   */
  function initializePerformance() {
    // Lazy load images when they come into view
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  // Initialize all functionality when DOM is loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Initialize additional features
  initializeKeyboardNavigation();
  initializeErrorHandling();
  initializeAccessibility();
  initializePerformance();
})();
