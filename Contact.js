  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    ['name', 'email', 'subject', 'message'].forEach(id => {
      document.getElementById(id + 'Error').textContent = '';
    });

    let hasError = false;

    // Validate Name
    const name = form.name.value.trim();
    if (name.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter a valid name.';
      hasError = true;
    }

    // Validate Email
    const email = form.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      hasError = true;
    }

    // Validate Subject
    const subject = form.subject.value.trim();
    if (subject.length < 4) {
      document.getElementById('subjectError').textContent = 'Please enter a subject.';
      hasError = true;
    }

    // Validate Message
    const message = form.message.value.trim();
    if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Please enter a message (at least 10 characters).';
      hasError = true;
    }

    // If no errors, simulate form submission
    if (!hasError) {
      alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    }
  });


  
  // Initialize the map and set its view to your location & zoom level
  const map = L.map('map').setView([37.7749, -122.4194], 13); // Example: San Francisco coords
  // Set the tile layer to OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  // Add a marker with popup at the location
  L.marker([37.7749, -122.4194]).addTo(map)
    .bindPopup('Cybersecurity Headquarters')
    .openPopup();


    
  // // Basic form submission handling with alert (simulate sending)
  // document.getElementById('contactForm').addEventListener('submit', function(e) {
  //   e.preventDefault();
  //   const name = this.name.value.trim();
  //   const email = this.email.value.trim();
  //   const message = this.message.value.trim();

  //   if(name && email && message) {
  //     alert(\`Thank you, \${name}! Your message has been sent.\`);
  //     this.reset();
  //   } else {
  //     alert('Please fill in all fields before submitting.');
  //   }
  // });});
