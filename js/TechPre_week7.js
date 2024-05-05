// 1. Define the API base URL.
// 2. On page load:
//   a. Extract UUID from the page's dataset.
//   b. Make an API call to the OCHRE endpoint with the UUID.
//   c. Parse the XML response.
//   d. Extract necessary details:
//      - First page: Title and properties.
//      - Second page: Title and image URL.
//   e. Update the HTML content dynamically based on the fetched data. 

document.addEventListener('DOMContentLoaded', function() {
    const baseURL = 'https://ochre.lib.uchicago.edu/ochre?uuid=';
    const container = document.getElementById('title-container');
    const uuid = '6f18e3a7-a396-46d9-85cb-92674c24cfc0';  // Use your specific UUID

    fetch(`${baseURL}${uuid}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(xmlData => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, "text/xml");

            // Specific path to the string based on your XML structure
            const stringElement = xmlDoc.querySelector('identification > label > content > string');
            if (stringElement) {
                const titleText = stringElement.textContent; // Should be 'RS 15.001'
                document.title = titleText;  // Set the page title
                container.innerHTML = `<h1>${titleText}</h1>`;  // Also display the title in the page
            } else {
                throw new Error('Title string element not found in the XML data');
            }

            // Correction: Properly handle multiple properties
            const properties = xmlDoc.querySelectorAll("property");
            properties.forEach(p => {
                const string = p.querySelector("string") ? p.querySelector("string").textContent : 'N/A';
                const value = p.querySelector('value') ? p.querySelector('value').textContent : 'N/A';
                container.innerHTML += `<p>${string}: ${value}</p>`;  // Display each property and its value
            });
        })
        .catch(error => {
            console.error('Error fetching or processing data:', error);
            container.innerHTML = `<h1>Error loading data: ${error.message}</h1>`;
        });
});
