const items = ['apple', ' banana', ' orange', ' grape', ' strawberry']; // Array of items

function searchItems() {
    const query = document.getElementById('searchInput').value.toLowerCase(); //Get user input and convert to lowercase
    const results = items.filter(item => item.toLowerCase().includes(query)); // Filter items based on search query

    displayResults(results); // Display the filtered results
}

function displayResults(results) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = ''; // Clear previous results

    results.forEach(item => {
        const li = document.createElement('li');
        li.textContent = items; // Add each matching item to the list
        resultsList.appendChild(li);
    });
}

document.getElementById('searchInput').addEventListener('input', searchItems); // Run search as the user types