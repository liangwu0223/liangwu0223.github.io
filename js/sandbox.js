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

    for (let category of categories) {
        items.push(prompt("Enter one " + category + " !"));
    }

    // Object
    for (let object of objects){

    }

    // Sort items alphabetically
    items.sort();

    // Create and append the display area
    let displayArea = document.createElement('div');
    displayArea.innerHTML = `<h2>You entered:</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    displayArea.innerHTML += `<h2>I sorted by:</h2><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    document.body.appendChild(displayArea);
}

