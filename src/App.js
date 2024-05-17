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
  const reloadPage = () => {
    location.reload(); 
  };
  return (
    <Router basename='/privils_food_site'>
        <Header />
        <Routes>
          <Route index element={<Home reloadPage={reloadPage}/>}/>
          <Route path='/privils_food_site' element={<Home reloadPage={reloadPage}/>}/>
          <Route path="/search_Meal" element={<SearchResult reloadPage={reloadPage} />} />
          <Route path="/recipes/:mealId" element={<Recipe reloadPage={reloadPage} />} />
          <Route path="/about" element={<About reloadPage={reloadPage} />} />
        </Routes>
    </Router>
  );
}

export default App;
