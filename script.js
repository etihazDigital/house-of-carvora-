/* =========================================================
   HOUSE OF CRAVORA — site interactivity
   ========================================================= */
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.nav-mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Mark active nav link based on current page ---- */
  var current = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-desktop a, .nav-mobile a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Menu category tabs (menu.html) ---- */
  var menuTabs = document.querySelectorAll('.menu-tab');
  var menuSections = document.querySelectorAll('[data-menu-category]');
  if (menuTabs.length && menuSections.length) {
    menuTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        menuTabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        var target = tab.getAttribute('data-target');
        menuSections.forEach(function (sec) {
          if (target === 'all' || sec.getAttribute('data-menu-category') === target) {
            sec.hidden = false;
          } else {
            sec.hidden = true;
          }
        });
      });
    });
  }

  /* ---- Gallery filters (gallery.html) ---- */
  var galleryFilters = document.querySelectorAll('.gallery-filter');
  var galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryFilters.length && galleryItems.length) {
    galleryFilters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        galleryFilters.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var filter = btn.getAttribute('data-filter');
        galleryItems.forEach(function (item) {
          var cat = item.getAttribute('data-category');
          item.hidden = !(filter === 'all' || cat === filter);
        });
      });
    });
  }

  /* ---- Current year in footer ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

});
