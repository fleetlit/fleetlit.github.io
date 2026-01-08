// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInside = mainNav.contains(event.target) ||
                           mobileToggle.contains(event.target);

      if (!isClickInside && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileToggle.classList.remove('active');
      }
    });

    // Close menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to current page nav link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath ||
        (currentPath.startsWith(linkPath) && linkPath !== '/')) {
      link.classList.add('active');
    }
  });

  // Copy code functionality
  const codeBlocks = document.querySelectorAll('.code-block');

  codeBlocks.forEach(block => {
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.style.cssText = `
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      padding: 0.25rem 0.75rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      color: white;
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s;
    `;

    block.style.position = 'relative';
    block.appendChild(copyBtn);

    copyBtn.addEventListener('click', async () => {
      const code = block.textContent.replace('Copy', '').trim();

      try {
        await navigator.clipboard.writeText(code);
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = 'rgba(16, 185, 129, 0.2)';
        copyBtn.style.borderColor = 'rgba(16, 185, 129, 0.5)';

        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.style.background = 'rgba(255, 255, 255, 0.1)';
          copyBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
});
