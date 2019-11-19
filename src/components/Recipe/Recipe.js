import React, { useState } from 'react';

import ColoredSquare  from '../ColoredSquare/ColoredSquare';
import InputForm from '../InputForm/InputForm';
import './Recipe.css';

const Recipe = (props) => {
const { name, date, ingredients } = props.recipe;

const [ showRecipe, setShowRecipe ] = useState(false);
const [ edit, setEdit ] = useState(false);

const handleRecipe = () => {
  setShowRecipe(!showRecipe);
}

const onEdit = () => {
  setEdit(true)
}

const getEditedRecipe = (input) => {
  setEdit(false)
}

const getCancelConfirmation = () => {
  setEdit(false)
}
  
  return (   
    <div className="recipe">
        <div className="header" onClick={ handleRecipe }> 

          <div id="redFocus">
          { true && (
            <ColoredSquare width="5px" height="50px" color="#FF2C5F" />
          )}

        </div>
          <h6 className="recipeName"> { name }
            <p id="oldVersions" className="badge badge-pill">0</p>
          </h6>
           
          <div className="date"> {date} </div>
        </div>
        { showRecipe && ( 
            <div className="ingredients">
              <div>INGREDIENTS</div>
              <ul>
                { ingredients.split(",").map((item, index) =>
                    <li key={index}>{ item }</li>)
                }
              </ul>              
              <div id="buttons">
                <button className="btn btn-warning" onClick={ onEdit }>EDIT</button>
                <button className="btn btn-danger">DELETE</button>
              </div>
              { edit && 
              <InputForm 
                edit={edit}
                editedRecipe = {getEditedRecipe}
                cancelConfirmation = {getCancelConfirmation}
                />}
            </div>
          )}        
    </div>
  )
}

export default Recipe;