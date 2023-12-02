import { displayData } from './app';


function showLoading() {
  const jokeElement = document.getElementById('joke');
  jokeElement.innerHTML = '<p>Loading...</p>';
}


function showError(message) {
  const jokeElement = document.getElementById('joke');
  jokeElement.innerHTML = `<p>Error: ${message}</p>`;
}


displayData();


const button = document.querySelector('button');
button.addEventListener('click', async () => {
  showLoading();

  try {
    await displayData();
  } catch (error) {
    showError(error.message); 
  }
});
