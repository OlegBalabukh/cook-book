import React from 'react';

import NewRecipe from '../../components/NewRecipe/NewRecipe';
import Recipe from '../../components/Recipe/Recipe';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Cookbook</h2>       
      </header>
      
      <div className="main">
        <div className="section">
        <NewRecipe />
        {/*List <Recipe /> */}
        <Recipe />     
        </div>
        <div className="section">
          {/*List <PreviousVersionsList /> */}
        </div>
      </div>
        
    </div>
  );
}

export default App;
