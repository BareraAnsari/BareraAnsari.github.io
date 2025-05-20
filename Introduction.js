  document.querySelector('.btn').addEventListener('click', function(event) {
      event.preventDefault();
      alert('More information about Cybersecurity will be available soon!');
    });
  

  (function() {
    'use strict';

    // Elements
    const addToCartBtn = document.querySelector('button.add-to-cart');
    const cartCountElem = document.getElementById('cart-count');

    // Initialize count from localStorage (string => int, default 0)
    let cartCount = parseInt(localStorage.getItem('cartCount'), 10);
    if (isNaN(cartCount) || cartCount < 0) {
      cartCount = 0;
    }
    cartCountElem.textContent = cartCount;

    // Sanitize text insertion function (not needed here since we only insert numbers, but shown as best practice)
    function safeTextUpdate(elem, text) {
      // Use textContent instead of innerHTML for safety
      elem.textContent = String(text);
    }

    // Update cart display
    function updateCartCount(newCount) {
      safeTextUpdate(cartCountElem, newCount);
      localStorage.setItem('cartCount', newCount.toString());
    }

    addToCartBtn.addEventListener('click', function() {
      cartCount++;
      updateCartCount(cartCount);

      // Visual feedback
      addToCartBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        addToCartBtn.style.transform = 'scale(1)';
      }, 150);
    });

    // Clicking cart resets count (demo only, not secure for production)
    document.querySelector('.cart').addEventListener('click', function() {
      cartCount = 0;
      updateCartCount(cartCount);
    });

    // Security notes:
    // - We never insert untrusted HTML.
    // - Use textContent for setting text to avoid XSS.
    // - localStorage is not secure for sensitive data; for real apps use authentication and server-side validation.
    // - CSRF protections and input validations belong on the server side.
    // - Frontend is defense in depth; always validate on backend.

  })();

