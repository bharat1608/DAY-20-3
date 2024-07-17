// script.js

/**
 * Fetch a random Chuck Norris fact from the API
 */
function fetchChuckNorrisFact() {
    console.log('Fetching Chuck Norris fact...');
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => {
        console.log('Response received', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received', data);
        const factContainer = document.getElementById('factContainer');
        factContainer.innerHTML = `
          <p>${data.value}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching Chuck Norris fact:', error);
      });
  }
  
  // Add event listener to fetch a fact when the button is clicked
  document.getElementById('getFactBtn').addEventListener('click', fetchChuckNorrisFact);
  
  // Fetch a fact on page load
  fetchChuckNorrisFact();
  
  