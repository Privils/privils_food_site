

import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Recipes from "./Recipe";

const SearchResult = () => {
    const [searchMeal, setSearchMeal] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMealDetails, setSelectedMealDetails] = useState(null); // New state variable to store selected meal details
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
  
  
    const urls = [
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchQuery}`

    ];

 


    useEffect(() => {
      fetchCategories();

    }, []);
  
    useEffect(() => {
      if (searchQuery) {
        getSearchResults();
      }
    }, [searchQuery]);
  
    useEffect(() => {
      if (selectedCategory) {
        fetchMealsByCategory();
      }
    }, [selectedCategory]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setSearchQuery(event.target.elements.search.value);
    };
  
    const handleViewRecipeClick = async (mealId) => {
      // Fetching details of the selected meal
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        setSelectedMealDetails(data.meals && data.meals[0]); // Store selected meal details
      } catch (error) {
        console.log("error fetching meal details", error);
      }
    };


    const getSearchResults = async () => {
      let data = null;

      for (const url of urls) {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            console.warn(`Failed fetch for URL: ${url}`);
            continue; // Skip to the next URL
          }

          const result = await response.json();

          if (result.meals && result.meals.length > 0) {
            data = result.meals; // Valid data found
            break; // Stop fetching further
          } else {
            console.warn(`No data found for URL: ${url}`);
          }
        } catch (err) {
          console.error(`Error fetching from URL: ${url}`, err);
        }
      }

      if (data) {
        setSearchMeal(data);
        setError(null);
      } else {
        setSearchMeal([]); 
        setError("No meals found for the given query.");
      }
    };

    // //function for search input and results
    async function getSearchResultsArea() {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?a=${searchQuery}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchMeal(data.meals || []);
      } catch (error) {
        console.log("error fetching search results", error);
      }
    }
  
    // Fetching categories
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const data = await response.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };
  
    // Fetchinng meals by category
    const fetchMealsByCategory = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.log("Error fetching meals by category:", error);
      }
    };
  
    //function to  Handle category click
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <section className="searchContainerSection">
          <form id="form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search meal name or input any letter"
              name="search"
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div>
            <section className="categoryMain">
              {/* Displaying categories */}
              <div>
                {categories.map((category) => (
                  <button
                    key={category.strCategory}
                    onClick={() => handleCategoryClick(category.strCategory)}
                  >
                    {category.strCategory}
                  </button>
                ))}
              </div>
            </section>

            {/* for Displaying meals within the selected category */}
            {selectedCategory && (
              <section>
                <div  className="searchResultsContainer">
                  {meals.map((meal) => (
                    <div key={meal.idMeal} className="gradientOverlay">
                      <div className="searchResult">
                        <img src={meal.strMealThumb} alt="" />
                        <span className="name">{meal.strMeal}</span>
                        <Link to={`/recipes/${meal.idMeal}`} className="link">View Recipe</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
          <div className="searchResultsContainer">
            {searchMeal.map((meal) => (
              <div className="gradientOverlay" key={meal.idMeal}>
                <div className="searchResult">
                  <img src={meal.strMealThumb} alt="" />
                  <span className="name">{meal.strMeal}</span>
                  <Link to={`/recipes/${meal.idMeal}`}>
                    <button className="Searchbtn">View Recipe</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {selectedMealDetails && <Recipes mealDetails={selectedMealDetails} />}{" "}
      
      </>
    );
}

export default SearchResult;

