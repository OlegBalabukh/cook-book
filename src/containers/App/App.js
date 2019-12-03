import React, { useEffect } from 'react';
import { connect } from "react-redux";

import NewRecipe from '../../components/NewRecipe/NewRecipe';
import Recipe from '../../components/Recipe/Recipe';
import Version from '../../components/Version/Version';
import { getRecipesAction } from "./actions/getRecipes.action";
import { addRecipeAction } from "./actions/addRecipe.action";
import { deleteRecipeAction } from "./actions/deleteRecipe.action";
import { setActiveRecipeAction } from "./actions/setActiveRecipe.action.js";
import { updateRecipeAction} from "./actions/updateRecipe.action.js";
import { saveRecipeVersionAction } from "./actions/saveRecipeVersion.action.js";
import { setActiveVersionAction } from "./actions/setActiveVersion.action.js";
import { deleteVersionAction } from "./actions/deleteVersion.action.js";

import './App.css';

function App(props) {
  const { getRecipes, addRecipe, deleteRecipe, setActiveRecipe, updateRecipe } = props;
  const { saveRecipeVersion, deleteVersion, setActiveVersion, recipes } = props;

  const focused = recipes.find(recipe => recipe.isFocused);

  useEffect(() => {
    recipes.length === 0 && getRecipes();
  }, [recipes, getRecipes]);

  return (
    <div className="app">
      <header className="app-header">
        <h2>Cookbook</h2>
      </header>
      
      <div className="main">
        <div className="section">
        <h5>RECIPES</h5>
        <NewRecipe addRecipe={addRecipe} getRecipes={getRecipes} />
        { recipes.length > 0 && recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
              setActiveRecipe={setActiveRecipe}
              addRecipe={addRecipe}
              saveRecipeVersion={saveRecipeVersion}
              updateRecipe={updateRecipe}
            />
          )
        })}
        </div>
        <div className="section">
          <h5>VERSIONS</h5>
          {
            focused && focused.oldVersions.map(version => {
              return (
                <Version
                  key={version.id}
                  _id = {focused._id}
                  recipe={version}
                  deleteVersion={deleteVersion}
                  setActiveVersion={setActiveVersion}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  recipes: state
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => { dispatch(getRecipesAction()); },
  addRecipe: (newRecipe) => { dispatch(addRecipeAction(newRecipe)); },
  deleteRecipe: (id) => { dispatch(deleteRecipeAction(id)); },
  setActiveRecipe: (id) => { dispatch(setActiveRecipeAction(id)); },
  updateRecipe: (id) => { dispatch(updateRecipeAction(id)); },

  saveRecipeVersion: (recipe) => { dispatch(saveRecipeVersionAction(recipe)); },
  setActiveVersion: (id) => { dispatch(setActiveVersionAction(id)); },
  deleteVersion: (id) => { dispatch(deleteVersionAction(id)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
