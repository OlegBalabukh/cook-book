import React, { useState } from 'react';

import ColoredSquare  from '../ColoredSquare/ColoredSquare';
import '../../common/Recipe.css';

const Version = (props) => {
  const { id, name, date, ingredients, isFocused } = props.recipe;
  const { deleteVersion, setActiveVersion } = props;

  const [ showIngredients, setShowIngredients ] = useState(false);

  const handleDelete = () => {
    deleteVersion(id)
  }

  const handleShow = () => {
    setActiveVersion(id);    
    if (!isFocused && !showIngredients) {
      setShowIngredients(true)
    } else if (isFocused === true) {
      setShowIngredients(!showIngredients)
    }
  }

  return (
    <div className="recipe" >
      <div className="header" onClick={ handleShow }>
        { isFocused && (
          <ColoredSquare width="5px" height="50px" color="#FF2C5F" />
        )}
        <h6 className="recipeName"> { name }</h6>
        <div className="date"> {date} </div>
      </div>
      { isFocused && showIngredients &&  ( 
        <div className="ingredients">
          <div>INGREDIENTS</div>
          <ul>
            { ingredients.split(",")
              .map((item, index) => 
              <li key={index}>{ item }</li> )
            }
          </ul>
          <button
            className="btn btn-danger"
            onClick={ handleDelete }
          > DELETE </button>          
        </div>
      )}
    </div>
  )
}

export default Version;