import React, { useEffect, useState } from 'react'
import image from "../components/images/indian.jpg";
import image1 from "../components/images/italian.jpg";
import image2 from "../components/images/mexican.jpg";
import image3 from "../components/images/american.jpg";
import image4 from "../components/images/egyptian.jpg";
import image5 from "../components/images/turkish.jpg";
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'


const Home = () => {
    const [randomMeal, setRandomMeal] = useState([]);
    useEffect(() => {
      getRandomMeal();
    }, []);
  
    //for getting random data
    async function getRandomMeal() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
  
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
  
        const data = await response.json();
        console.log(data.meals);
        setRandomMeal(data.meals);
      } catch (error) {
        console.error("Error fetching random data:", error);
      }
    }
    //for looping over the list items
  // Function to generate list items
  function generateList(values, property = 'strIngredient') {
    const listItems = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = values[property + i];
      if (ingredient) {
        listItems.push(<li key={i}>{ingredient}</li>);
      }
    }
    return listItems
  }
  return (
    <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <section className="allContainer">
        <section className="mainSection">
        <div class="container">
          <div class="images">
            <h1 class="country-name">indian</h1>
            <img src={image} className="firstImmages" />
          </div>
          <div class="info-food">
            <h3 class="h3">ingridients</h3>
            <ul>
              <li>Vegetable Oil</li>
              <li>onian</li>
              <li>garlic</li>
              <li>ginger</li>
              <li>Coriander</li>
              <li>cumin</li>
              <li>paprika</li>
              <li>Garam Masala</li>
              <li>Chopped Tomatoes</li>
              <li>Kidney Beans</li>
              <li>Basmati Rice</li>
            </ul>
          </div>
        </div>
        <div class="container1">
          <div class="info-food">
            <h3 class="h3">ingridients</h3>
            <ul>
              <li>mozzarella balls</li>
              <li>baby plum tomatoes</li>
              <li>fresh basil</li>
              <li>farfalle</li>
              <li>extra virgin olive oil</li>
              <li>Green Olives</li>
              <li>tunar</li>
              <li>salt</li>
              <li>pepper</li>
            </ul>
          </div>
          <div class="images">
            <h1 class="country-name">italian</h1>
            <img src={image1} className="firstImmages" />
          </div>
        </div>

        <div class="container">
          <div class="images">
            <h1 class="country-name">mexican</h1>
            <img src={image2} className="firstImmages" />
          </div>
          <div class="info-food">
            <h3 class="h3">ingridients</h3>
            <ul>
              <li>cajun</li>
              <li>cayenne pepper</li>
              <li>white fish</li>
              <li>vegetable oil</li>
              <li>flour tortilla</li>
              <li>avocado</li>
              <li>little gem lettuce</li>
              <li>spring onion</li>
              <li>salsa</li>
              <li>sour cream</li>
              <li>lemon</li>
              <li>garlic</li>
            </ul>
          </div>
        </div>
        <div class="fixer">
          <div class="container1">
            <div class="info-food">
              <h3 class="h3">ingridients</h3>
              <ul>
                <li>banana</li>
                <li>eggs</li>
                <li>baking powder</li>
                <li>Raspberries</li>
                <li>Pecan Nuts</li>
                <li>Vanilla Extract</li>
                <li>Oil</li>
              </ul>
            </div>
            <div class="images">
              <h1 class="country-name">American</h1>
              <img src={image3} className="firstImmages" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="images">
            <h1 class="country-name">egyptian</h1>
            <img src={image4} className="firstImmages" />
          </div>
          <div class="info-food">
            <h3 class="h3">ingridients</h3>
            <ul>
              <li>mozzarella balls</li>
              <li>tuna</li>
              <li>salt</li>
              <li>beef</li>
              <li>onion</li>
              <li>chicken stock cube</li>
              <li>tomatoes</li>
              <li>garlic clove</li>
              <li>rice</li>
              <li>noodles</li>
              <li>butter</li>
              <li>olive oil</li>
              <li>cumin</li>
              <li>pepper</li>
              <li>white wine vinegar</li>
            </ul>
          </div>
        </div>
        <div class="container1">
          <div class="info-food">
            <h3 class="h3">ingridients</h3>
            <ul>
              <li>Lentils</li>
              <li>onians</li>
              <li>carrots</li>
              <li>tomatoes</li>
              <li>cumin</li>
              <li>paprika</li>
              <li>mint</li>
              <li>thyme</li>
              <li>black pepper</li>
              <li>red pepper flakes</li>
              <li>vegetable stock</li>
              <li>water</li>
            </ul>
          </div>
          <div class="images">
            <h1 class="country-name">turkish</h1>
            <img src={image5} className="firstImmages" />
          </div>
        </div>
        </section>
        <hr />
        <section class=" ">
          <p class="attraction">
            Ignite Culinary Excellence: Unleash the Power of Unique Recipes for
            Your Business Embark on a flavorful journey with{" "}
            <em>
              <strong>Yummy Notes</strong>
            </em>
            , your gateway to culinary innovation. Elevate your business and
            captivate your audience with our handpicked, delectable recipes.
            From enticing appetizers to exquisite main courses, our curated
            collection ensures your brand stands out. Empower your team-building
            events or client meetings with gastronomic delights that leave a
            lasting impression. With{" "}
            <em>
              <strong>Yummy Notes</strong>
            </em>
            , infuse creativity into your business, transforming it into a
            culinary adventure that resonates with clients, partners, and
            employees alike. Unleash the power of exceptional recipes and savor
            the success they bring to your business
          </p>
        </section>
        <div class="btn-container">
          <button className="btn" onClick={getRandomMeal}>
            Get Random Meal
          </button>
        </div>
        <section className="randomMeal_Container">
          {randomMeal.map((meal) => (
            <div key={meal.idMeal} className="randomMeal_item">
              <div className="randomMeal_img">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="finaleImages"
                />
              </div>
              <div className="mealName">
            <h3>country of origin is :  {meal.strArea}</h3><h1 className="h1mealName">{meal.strMeal}</h1> <h3>meal category is : {meal.strCategory}</h3>
          </div>
              <div className="randomResultsContainer">
                <div className="Ingredients">
                  <h1 className="h1">Ingredients</h1>
                  <ol>{generateList(meal)}</ol>
                </div>
                <div className="measurements">
                  <h1 className="h1">Measurements</h1>
                  <ol>{generateList(meal, "strMeasure")}</ol>
                </div>
              </div>
              <div className="instructions">
                <h1>Instructions</h1>
                <p className="instruction_pg">{meal.strInstructions}</p>
              </div>
            </div>
          ))}
        </section>

        <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Learn more about our passion for food and our commitment to quality.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Yummy notes made with  <FaHeart className='faHeart'/>  by <span className='Priviledge'>Priviledge</span>. All rights reserved.</p>
      </div>
    </footer>
      </section>
    </>
  )
}

export default Home
