const jokeTextElement = document.getElementById('joke-text');
const newJokeButton = document.getElementById('new-joke-btn');

newJokeButton.addEventListener('click', fetchJoke);

function fetchJoke() {
  // Make a request to the Chuck Norris Jokes API
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
      // Update the joke text on the page
      jokeTextElement.textContent = data.value;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// HAMBURGER MENU
const navItems = document.querySelector('.navigation');

const closeButton = document.querySelector('.fa-solid');  //closeMenu()
const hamMenu = document.querySelector('.fa-bars')       // openMenu()

closeButton.addEventListener('click', function(){
    navItems.style.right = '-200px';
});

hamMenu.addEventListener('click', function(){
    navItems.style.right = '0';
});
