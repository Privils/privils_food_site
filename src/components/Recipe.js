import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const { mealId } = useParams(); // Extract mealId from URL parameter
    const [mealDetails, setMealDetails] = useState(null);
  
    useEffect(() => {
      console.log("mealId:", mealId); // Log the mealId
      const fetchMealById = async () => {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
          );
          const data = await response.json();
          setMealDetails(data.meals ? data.meals[0] : null);
        } catch (error) {
          console.log("error getting meal id", error);
        }
      };
    
      fetchMealById();
    }, [mealId]);
  
    function generateList(values, property = "strIngredient") {
      const listItems = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = values[property + i];
        if (ingredient) {
          listItems.push(<li key={i}>{ingredient}</li>);
        }
      }
      return listItems;
    }
  
    if (!mealDetails) {
      return <div>Loading...</div>;
    }
  
  return (
    <>
    <main className="main">
      <section className="randomMeal_Container">
        <div key={mealDetails.idMeal} className="randomMeal_item">
          <div className="randomMeal_img">
            <img
              src={mealDetails.strMealThumb}
              alt=""
              className="finaleImages"
            />
          </div>
          <div className="mealName">
            <h3>country of origin is : {mealDetails.strArea}</h3>
            <h1>{mealDetails.strMeal}</h1>{" "}
            <h3>meal category is : {mealDetails.strCategory}</h3>
          </div>
          <div className="randomResultsContainer">
            <div className="Ingredients">
              <h1 className="h1">Ingredients</h1>
              <ul>{generateList(mealDetails)}</ul>
            </div>
            <div className="measurements">
              <h1 className="h1">measurements</h1>
              <ul>{generateList(mealDetails, "strMeasure")}</ul>
            </div>
          </div>
          <div className="instructions">
            <h1>instructions</h1>
            <p className="instruction_pg">{mealDetails.strInstructions}</p>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Recipe
