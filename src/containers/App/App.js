import React from 'react';
import { connect } from "react-redux";

import NewRecipe from '../../components/NewRecipe/NewRecipe';
import Recipe from '../../components/Recipe/Recipe';
import { addRecipeAction } from "./actions/addRecipe.action";
import { deleteRecipeAction } from "./actions/deleteRecipe.action";
import { setActiveRecipeAction } from "./actions/setActiveRecipe.action.js";

import './App.css';

function App({ addRecipe, deleteRecipe, setActiveRecipe, recipes }) {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Cookbook</h2>       
      </header>
      
      <div className="main">
        <div className="section">
        <NewRecipe addRecipe={addRecipe} />
        {/*List <Recipe /> */}
        { recipes.length > 0 && recipes.map(recipe => {          
          return (
            <Recipe 
              key={recipe.id}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
              setActiveRecipe={setActiveRecipe}
            />  
          ) 
        })}
          
        </div>
        <div className="section">
          {/*List <PreviousVersionsList /> */}
        </div>
      </div>
        
    </div>
  );
}

const mapStateToProps = (state) => ({
  recipes: state
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (newRecipe) => { dispatch(addRecipeAction(newRecipe)); },
  deleteRecipe: (id) => { dispatch(deleteRecipeAction(id)); },
  setActiveRecipe: (id) => { dispatch(setActiveRecipeAction(id)); }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
