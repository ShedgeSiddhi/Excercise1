// Function to fetch JSON data
function fetchJSONFile(file, callback) {
    fetch(file)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error fetching JSON:', error));
}

// Function to create class cards
function createClassCard(classData) {
    const classCard = document.createElement("div");
    classCard.classList.add("card", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = classData.title;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = classData.description;

    const duration = document.createElement("p");
    duration.textContent = `Duration: ${classData.duration}`;

    const price = document.createElement("p");
    price.textContent = `Price: $${classData.price}`;

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(duration);
    cardBody.appendChild(price);

    classCard.appendChild(cardBody);

    return classCard;
}

// Function to display classes
function displayClasses(jsonData) {
    const classesContainer = document.getElementById("classes-container");
    jsonData.classes.forEach(classData => {
        const classCard = createClassCard(classData);
        classesContainer.appendChild(classCard);
    });
}

// Window load event
window.onload = function() {
    fetchJSONFile("data/classes.json", displayClasses);
};
