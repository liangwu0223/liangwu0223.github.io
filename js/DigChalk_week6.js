
//Write a JS function called lastItem() that takes one parameter.

// The parameter will be an array that you can hard code into an onclick event on the button.
// onclick="lastItem(['Watermelon', 'Apple', 'Orange', 'Kiwi'])"
// Prepare a div on your page to display some output.
// The function should output the original array on the page: ['Watermelon', 'Apple', 'Orange', 'Kiwi'].
// The function should output the item that is last alphabetically: Watermelon.
// Test your function by adding new values to the array to make sure it returns the correct item.

function capitalize(text) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// onclick -> outout1 is passed as argument as outputId to the function
function lastItem(fruits, outputId) {
    fruits.sort();
    const lastAlphabetical = fruits[fruits.length - 1];
    const outputDiv = document.getElementById(outputId); //JavaScript uses the document.getElementById('outputId') method to select the <div> based on its ID. 
    if (!outputDiv.innerHTML) {
        outputDiv.innerHTML = `Fruits sorted: ${fruits.join(', ')} <br>Last Alphabetical Item: ${lastAlphabetical}`;
    }
    toggleVisibility(outputId);
}

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// declar function: get numbers of categories and sort

//Write a JS function that asks the user to input things, then sorts them alphabetically and displays them on the HTML page.
// First, ask the user how many things the would like to enter, between 2 and 4.
// Use prompt() to gather the user input.
// Watch this video for all the details.
// Notice how the prompt reports back to the user how many items they chose to submit, then also what categories they chose.//

// declar function: get numbers of categories and sort
function getAndSort() {
    let numberOfCategories = parseInt(prompt("How many categories would you like to enter? Choose between 2 and 4."));
    while (isNaN(numberOfCategories) || numberOfCategories < 2 || numberOfCategories > 4) {
        numberOfCategories = parseInt(prompt("Invalid input. Please enter a number between 2 and 4."));
    }
    
    let categories = []; //array
    let items = []; //array
    // let objects = {Book: "Twilight", Tree: "Magnolia"}; //object is more concise
    
    // Collect categories
    for (let i = 0; i < numberOfCategories; i++) {
        categories.push(prompt(`Enter category ${i + 1} of ${numberOfCategories}:`));
    }
    
    // Collect items for each category
    for (let category of categories) {
        items.push(prompt(`Enter one ${category}:`));
    }
    
    //for (let category of categories) {
    //   items.push(prompt("Enter one " + category + " !"));} 
    // this also works
    
    
    // Sort items alphabetically
    items.sort();
    
    // Create and append the display area
    let displayArea = document.createElement('div');
    displayArea.innerHTML = `<h2>You entered:</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    displayArea.innerHTML += `<h2>I sorted by:</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    document.body.appendChild(displayArea);
}