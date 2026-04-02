document.addEventListener("DOMContentLoaded", function() {
    // Show all reveal elements
    document.querySelectorAll(".rev").forEach(function(el) {
      el.classList.add("vis");
    });

    // Skill bars — animate after short delay
    setTimeout(function() {
      document.querySelectorAll(".sk-card").forEach(function(el) {
        el.classList.add("inview");
      });
    }, 300);

    // Sidebar active nav on scroll — with bottom-of-page fix for contact
    var sections = ["hero","about","experience","projects","skills","education","contact"];
    var navLinks = document.querySelectorAll(".nav-link");

    function updateNav() {
      var scrollY = window.scrollY + 160;
      var pageBottom = window.scrollY + window.innerHeight;
      var docHeight = document.documentElement.scrollHeight;

      // If near bottom of page, always highlight contact
      if (pageBottom >= docHeight - 10) {
        navLinks.forEach(function(l) { l.classList.remove("active"); });
        var contactLink = document.querySelector(".nav-link[href='#contact']");
        if (contactLink) contactLink.classList.add("active");
        return;
      }

      sections.forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) return;
        if (el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
          navLinks.forEach(function(l) { l.classList.remove("active"); });
          var match = document.querySelector(".nav-link[href='#" + id + "']");
          if (match) match.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    // Expand/collapse project details on click
    document.querySelectorAll(".proj-item").forEach(function(item) {
      item.addEventListener("click", function() {
        var details = item.querySelector(".proj-details-inner");
        if (!details) return;
        var isOpen = item.classList.contains("open");
        document.querySelectorAll(".proj-item.open").forEach(function(o) {
          o.classList.remove("open");
          var d = o.querySelector(".proj-details-inner");
          if (d) d.style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          details.style.maxHeight = details.scrollHeight + "px";
        }
      });
    });
  });
