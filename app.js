import { fetchData } from './api';

async function displayData() {
  const data = await fetchData();

  
  const jokeElement = document.getElementById('joke');
  jokeElement.textContent = data.value;
}

export { displayData };
