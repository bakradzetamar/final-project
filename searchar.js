"use strict";

// Function to filter products based on search input and get the length of filtered array
function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts);
    
    // Get the length of the filtered array and display it
    const filteredLength = filteredProducts.length;
    console.log('Filtered products length:', filteredLength);
}
