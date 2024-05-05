// URL for JSONPlaceholder's posts API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Use fetch to get data from the API
fetch(apiUrl)
  .then(response => response.json())  // Convert the response to JSON
  .then(data => {
    // Display the first post's title and body in the console
    console.log("Title:", data[0].title);
    console.log("Body:", data[0].body);
})
.catch(error => console.error('There was an error!', error));

