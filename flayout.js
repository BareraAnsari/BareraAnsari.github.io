const lockIcon = document.querySelector('.lock-icon');
    lockIcon.addEventListener('click', () => {
      alert('Your security is our priority!');
    });
    // Keyboard accessibility: press Enter key on lock icon triggers alert
    lockIcon.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        alert('Your security is our priority!');
      }
    });