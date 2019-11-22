import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import ColoredSquare  from '../ColoredSquare/ColoredSquare';
import InputForm from '../InputForm/InputForm';
import useStyles from '../../common/DialogForm.style';
import '../../common/Recipe.css';

const Recipe = (props) => {
const classes = useStyles();
const { id, name, date, ingredients, isFocused } = props.recipe;
const { deleteRecipe, setActiveRecipe, addRecipe, saveRecipeVersion, updateRecipe } = props;

const [ edit, setEdit ] = useState(false);
const [ showIngredients, setShowIngredients ] = useState(false);

const onEdit = () => {
  setEdit(true)
}

const handleEditedRecipe = (edited) => {
  setEdit(false);

  if ( edited.id !== id ) {
    addRecipe(edited);
  } else if (edited.ingredients !== ingredients) {
    saveRecipeVersion(props.recipe)
    updateRecipe(edited)
  }
}

const getCancelConfirmation = () => {
  setEdit(false)
}

const handleDelete = () => {
  deleteRecipe(id)
}

const handleShow = () => {
  setActiveRecipe(id); 
  
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
          <h6 className="recipeName"> { name }
            <p id="oldVersions" className="badge badge-pill">0</p>
          </h6>
           
          <div className="date"> {date} </div>
        </div>
        { isFocused && showIngredients &&  ( 
            <div className="ingredients">
              <div>INGREDIENTS</div>
              <ul>
                { ingredients.split(",").map((item, index) =>
                    <li key={index}>{ item }</li>)
                }
              </ul>
              <div id="buttons">
                <Button
                  onClick={ onEdit }
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  EDIT
                </Button>
                <Button
                  onClick={ handleDelete }
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                >
                DELETE</Button>
              </div>
              { edit && 
              <InputForm                
                id={id}
                name={name}
                edit={edit}
                ingredients={ingredients}                
                editedRecipe = {handleEditedRecipe}
                cancelConfirmation = {getCancelConfirmation}
                />}
            </div>
          )}
    </div>
  )
}

export default Recipe;