import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import InputForm from '../InputForm/InputForm';
import useStyles from '../../common/DialogForm.style';
import '../../common/Recipe.css';

const Recipe = (props) => {
  const classes = useStyles();
  const { _id, id, name, date, ingredients, isFocused, oldVersions } = props.recipe;
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

  const handleClose = () => {
    setEdit(false)
  }

  const handleDelete = () => {
    deleteRecipe(_id)
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
        <div className={ isFocused ? "focusRecipe" : "header"} onClick={ handleShow }>
          <h6 className="recipeName">{ name }
            { oldVersions.length > 0 &&
              <p id="updated">
                <span>updated</span>
                <span id="oldVersions" className="badge badge-pill">{oldVersions.length}</span>
              </p>
            }
          </h6>
          <div className="date">{ date }</div>
        </div>
        { isFocused && showIngredients &&  ( 
            <div className="ingredients">
              <div className="ingHeader">Ingredients</div>
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
                  cancelConfirmation = {handleClose}
                />
              }
            </div>
          )}
    </div>
  )
}

export default Recipe;