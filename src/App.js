import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import Recipe from './components/Recipe';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const handleViewRecipeClick = (mealId) => {
    setSelectedMeal(mealId);
  };
  return (
    <Router basename='/privils_food_site'>
        <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/privils_food_site' element={<Home />}/>
          <Route path="/search_Meal" element={<SearchResult  />} />
          <Route path="/recipes/:mealId" element={<Recipe  />} />
          <Route path="/about" element={<About  />} />
        </Routes>
    </Router>
  );
}

export default App;
