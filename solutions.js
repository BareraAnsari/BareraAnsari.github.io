// JavaScript to toggle the collapsible content on clicking list items
  document.querySelectorAll('.solutions-list li').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
    // Allow keyboard users to toggle on enter or space key
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.classList.toggle('active');
      }
    });
  });
