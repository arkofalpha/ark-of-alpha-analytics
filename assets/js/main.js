/**
* Template Name: Medilab
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectHeader = document.querySelector('.header');
    if (!selectHeader) {
      return;
    }

    window.scrollY > 100 ? selectHeader.classList.add('scrolled') : selectHeader.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile Navigation
   */
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navmenu = document.querySelector('.navmenu');

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('bi-x');
      this.classList.toggle('bi-list');
      navmenu.classList.toggle('mobile-nav-active');
      document.body.classList.toggle('mobile-nav-open');
    });
  }

  /**
   * Close mobile nav when clicking outside
   */
  document.addEventListener('click', (e) => {
    if (navmenu?.classList.contains('mobile-nav-active') && 
        !e.target.closest('.navmenu') && 
        !e.target.closest('.mobile-nav-toggle')) {
      navmenu.classList.remove('mobile-nav-active');
      mobileNavToggle.classList.add('bi-list');
      mobileNavToggle.classList.remove('bi-x');
      document.body.classList.remove('mobile-nav-open');
    }
  });

  /**
   * Close mobile nav on escape key press
   */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navmenu?.classList.contains('mobile-nav-active')) {
      navmenu.classList.remove('mobile-nav-active');
      mobileNavToggle.classList.add('bi-list');
      mobileNavToggle.classList.remove('bi-x');
      document.body.classList.remove('mobile-nav-open');
    }
  });

  /**
   * Close menu on navigation item click
   */
  document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navmenu?.classList.contains('mobile-nav-active')) {
        navmenu.classList.remove('mobile-nav-active');
        mobileNavToggle.classList.add('bi-list');
        mobileNavToggle.classList.remove('bi-x');
        document.body.classList.remove('mobile-nav-open');
      }
    });
  });

  /**
   * Smooth scroll to sections and handle mobile nav
   */
  document.querySelectorAll('[data-section]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Close mobile nav if open
      if (navmenu?.classList.contains('mobile-nav-active')) {
        navmenu.classList.remove('mobile-nav-active');
        mobileNavToggle.classList.add('bi-list');
        mobileNavToggle.classList.remove('bi-x');
        document.body.classList.remove('mobile-nav-open');
      }

      const targetId = this.getAttribute('data-section');
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const headerOffset = document.querySelector('.header')?.offsetHeight || 0;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update active state
        document.querySelectorAll('[data-section]').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  /**
   * Navmenu scrollspy
   */
  function navmenuScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
    const scrollPosition = window.scrollY + headerHeight + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('[data-section]').forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', navmenuScrollspy);
  window.addEventListener('load', navmenuScrollspy);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        navmenu.classList.remove('mobile-nav-active');
        mobileNavToggle.classList.add('bi-list');
        mobileNavToggle.classList.remove('bi-x');
        document.body.classList.remove('mobile-nav-open');
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Add Read More functionality to testimonials on mobile
   */
  document.addEventListener('DOMContentLoaded', function() {
    const testimonialSpans = document.querySelectorAll('.testimonial-item span');
    testimonialSpans.forEach(span => {
      // Only add the button if the content is truncated
      if (span.scrollHeight > span.clientHeight) {
        const readMoreBtn = document.createElement('button');
        readMoreBtn.className = 'read-more-btn';
        readMoreBtn.textContent = 'Read More';
        span.parentNode.insertBefore(readMoreBtn, span.nextSibling);

        readMoreBtn.addEventListener('click', () => {
          span.classList.toggle('expanded');
          readMoreBtn.textContent = span.classList.contains('expanded') ? 'Show Less' : 'Read More';
        });
      }
    });
  });

})();