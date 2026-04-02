// 1. Grab all the navigation links and all the articles
const navLinks = document.querySelectorAll('nav ul li a');
const articles = document.querySelectorAll('main article');

// 2. Loop through each link to add a click event listener
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // 3. Get the ID from the href (e.g., "#guidelines")
    const targetId = link.getAttribute('href');

    // 4. Only run our logic if the link points to an internal ID on the page
    if (targetId.startsWith('#')) {
      // Prevent default jump behavior if you want a smooth transition
      event.preventDefault();

      const targetArticle = document.querySelector(targetId);

      if (targetArticle) {
        // 5. Logic similar to your example: Close (hide) all articles
        articles.forEach((article) => {
          article.style.display = 'none';
        });

        // 6. Open (show) the one that was just clicked
        targetArticle.style.display = 'block';
        
        // Optional: Focus the article for accessibility
        targetArticle.focus();
      }
    }
  });
});