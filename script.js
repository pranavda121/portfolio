<script>
  // Smooth scrolling with offset for fixed navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get height of fixed navbar
        const navbar = document.querySelector('.header');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        // Calculate scroll position with offset
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        // Scroll smoothly
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile navbar after click (optional)
        const navbarMenu = document.querySelector('.navbar');
        if (navbarMenu.classList.contains('active')) {
          navbarMenu.classList.remove('active');
        }
      }
    });
  });
</script>
