let hotCoffee = document.querySelector(".hot-coffee")

let coffeeTitle = document.querySelector(".display-5")

let ingridients = document.querySelector(".btn-lg")

hotCoffee.addEventListener("click", getRandomCoffeeID)


async function getRandomCoffeeID() {
    try {
      // Make a GET request to the API
      const response = await fetch('https://api.sampleapis.com/coffee/hot')
      
      // Check if the response status is OK (HTTP status code 200)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
  
      // Parse the response JSON
      const data = await response.json()
  
      // Assuming the API response is an array of objects with 'id' properties
      const coffeeArray = data;
  
      // Get a random index within the range of the array length
      const randomIndex = Math.floor(Math.random() * coffeeArray.length)
  
      // Get the random coffee object
      const randomCoffee = coffeeArray[randomIndex]
  
      // Get the ID from the random coffee object
      const randomCoffeeID = randomCoffee.id;
      const randomCoffeeTitle = randomCoffee.title
      const randomCoffeeImage = randomCoffee.image
      const randomCoffeeDesc = randomCoffee.description
      const coffeeIngredients = randomCoffee.ingredients
        
      coffeeTitle.textContent = randomCoffeeTitle
      document.querySelector(".description").textContent = randomCoffeeDesc
      document.querySelector(".first-text").style.display = "none"
      document.querySelector(".bg-body-tertiary").style.display = "block"
      document.querySelector(".coffee-image").src = randomCoffeeImage
      hotCoffee.innerHTML = "NEW coffee"

      
      

      // Add a click event listener to the "Show Ingredients" button
      showIngredientsButton.addEventListener('click', () => {
          // Render the list of ingredients
          const coffeeIngredientsList = document.getElementById('coffeeIngredients');
          coffeeIngredientsList.innerHTML = '';

          coffeeIngredients.forEach(ingredient => {
              const listItem = document.createElement('li');
              listItem.textContent = ingredient;
              coffeeIngredientsList.appendChild(listItem);
          });

          // Display the list of ingredients
          coffeeIngredientsList.style.display = 'block';
      });



     
      console.log("Random Coffee ID:", randomCoffeeID, randomCoffeeTitle, randomCoffeeImage)
  
      return randomCoffeeID;
    } catch (error) {
      console.error("Error fetching data:", error)
      return null; 
    }
  }
  
 
  
  
  
  
  
  
  