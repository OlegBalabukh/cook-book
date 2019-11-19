import React from 'react';
import { connect } from "react-redux";

import NewRecipe from '../../components/NewRecipe/NewRecipe';
import Recipe from '../../components/Recipe/Recipe';
import { addRecipeAction } from "./actions/addRecipe.action";
import './App.css';

function App({ addRecipe, recipes }) {
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
          return <Recipe key={recipe.id} recipe={recipe} />   
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
  // deleteTask: (id) => { dispatch(deleteTaskAction(id)); },
  // setActiveTask: (id) => { dispatch(setActiveTaskAction(id)); },
  // addComment: (comment) => { dispatch(addCommentAction(comment)); },
  // addTasksFromLocalStorage: (tasks) => { 
  //   dispatch(addTasksFromLocalStorageAction(tasks));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
