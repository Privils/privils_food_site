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
    <Router>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/search_Meal" element={<SearchResult />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
