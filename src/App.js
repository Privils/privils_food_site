

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import Recipe from './components/Recipe';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const handleViewRecipeClick = (mealId) => {
    setSelectedMeal(mealId);
  };

  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Routes>
        <Route index element={<Home/>}/>
      <Route path='/search_Meal' element={<SearchResult/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/recipes/:mealId" element={<Recipe/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


