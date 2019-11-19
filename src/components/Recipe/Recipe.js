import React, { useState } from 'react';

import ColoredSquare  from '../ColoredSquare/ColoredSquare';
import NewRecipe from '../NewRecipe/NewRecipe';
import './Recipe.css';

const Recipe = () => {
const [ showRecipe, setShowRecipe ] = useState(false);

const [ edit, setEdit ] = useState(false);

const handleRecipe = () => {
  setShowRecipe(!showRecipe);
}

const onEdit = () => {
  setEdit(true)
}
  
  return (   
    <div className="recipe">
        <div className="header" onClick={ handleRecipe }>       
          <div id="redFocus">
          { true && (
            <ColoredSquare width="5px" height="50px" color="#FF2C5F" />
          )}
        </div>
          <h6 className="recipeName"> Recipe Name
            <p id="oldVersions" className="badge badge-pill">0</p>
          </h6>
           
          <div className="date">
          {new Date(1574163812523).toString().substr(0, 24)}
          </div>
        </div>
        { showRecipe && ( 
            <div className="ingredients">
              <div>INGREDIENTS</div>
              <ul>
                <li>Ingredient lorem ispum 1</li>
                <li>Ingredient lorem ispum lorem ispum 2</li>
                <li>Ingredient 3</li>
                <li>Ingredient lorem ispum 4</li>
                <li>Ingredient lorem ispum lorem ispum lorem ispum 5</li>
              </ul>
              <div id="buttons">
                <button className="btn btn-warning" onClick={ onEdit }>EDIT</button>
                <button className="btn btn-danger">DELETE</button>
              </div>
              { edit && <NewRecipe edit={edit}/>}
            </div>
          )}        
    </div>
  )
}

export default Recipe;