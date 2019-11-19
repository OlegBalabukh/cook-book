import React from 'react';

import NewRecipe from '../NewRecipe/NewRecipe';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Cookbook</h2>
        <NewRecipe />
      </header>
    </div>
  );
}

export default App;
