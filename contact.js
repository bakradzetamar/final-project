
const countries = [
  "USA", "Finland",
  "Norway", "Portugal",
  "United Kingdom","China",
  "Sweden","Estonia",
  "Japan","German"
];

function generateListItems(arg) {
  let items = '';
  for (let i = 0; i < arg.length; i++) {
      items += `<li>${arg[i]}</li>`;
  }
  return items;
}

function filterCountries(searchTerm) {
  return countries.filter(country => country.toLowerCase().includes(searchTerm.toLowerCase()));
}

function updateCountriesList(searchTerm = '') {
  const filteredCountries = filterCountries(searchTerm);
  const countriesListElement = document.getElementById('countries-list');
  const searchInput = document.getElementById('search-input');
  
  if (filteredCountries.length > 0) {
      countriesListElement.innerHTML = generateListItems(filteredCountries);
      countriesListElement.style.display = 'block'; // Show the list
  } else {
      countriesListElement.innerHTML = ''; // Clear the list if no matching countries
      countriesListElement.style.display = 'none'; // Hide the list
  }
}

document.getElementById('search-input').addEventListener('input', function() {
  updateCountriesList(this.value);
});
  