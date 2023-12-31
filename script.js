let hotCoffee = document.querySelector(".hot-coffee");

let newCoffee = document.querySelector(".new-coffee");

let coffeeTitle = document.querySelector(".display-8");

hotCoffee.addEventListener("click", getRandomCoffeeID);
newCoffee.addEventListener("click", getRandomCoffeeID);

async function getRandomCoffeeID() {
  try {
    // Make a GET request to the API
    const response = await fetch("https://api.sampleapis.com/coffee/hot");

    // Check response status is OK 
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // Parse the response JSON
    const data = await response.json();

    // array of objects with 'id' properties
    const coffeeArray = data;

    // Get a random index 
    const randomIndex = Math.floor(Math.random() * coffeeArray.length);

    // Get the random coffee object
    const randomCoffee = coffeeArray[randomIndex];

    // Get the ID from the random coffee object
    const randomCoffeeID = randomCoffee.id;
    const randomCoffeeTitle = randomCoffee.title;
    const randomCoffeeImage = randomCoffee.image;
    const randomCoffeeDesc = randomCoffee.description;
    const coffeeIngredients = randomCoffee.ingredients;

    coffeeTitle.textContent = randomCoffeeTitle;
    document.querySelector(".description").textContent = randomCoffeeDesc;
    document.querySelector(".first-text").style.display = "none";
    document.querySelector(".bg-body-tertiary").style.display = "block";
    document.querySelector(".coffee-image").src = randomCoffeeImage;
    hotCoffee.style.display = "none";

    const coffeeIngredientsList = document.getElementById("coffeeIngredients");
    coffeeIngredientsList.innerHTML = "";

    coffeeIngredients.forEach((ingredient) => {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      coffeeIngredientsList.appendChild(listItem);

      coffeeIngredientsList.style.display = "block";
    });

    console.log(
      "Random Coffee ID:",
      randomCoffeeID,
      randomCoffeeTitle,
      randomCoffeeImage
    );

    return randomCoffeeID;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
