// /assets/js/incidents.js
document.getElementById("searchInput").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const cards = document.querySelectorAll(".incident-card");
  cards.forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(keyword) ? "block" : "none";
  });
});


const header = document.createElement('header');
header.innerHTML = `
  <h1>Cybersecurity Incidents</h1>
  <p>Learn about recent cybersecurity incidents, their effects, and how they were handled.</p>
`;
document.body.prepend(header); // or append to a specific element
