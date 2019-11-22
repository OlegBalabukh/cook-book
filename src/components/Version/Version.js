import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import useStyles from '../../common/DialogForm.style';
import '../../common/Recipe.css';

const Version = (props) => {
  const classes = useStyles();
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
      <div className={ isFocused ? "focusHeader" : "header"} onClick={ handleShow }>        
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
          <Button
            onClick={ handleDelete }
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            DELETE
          </Button>          
        </div>
      )}
    </div>
  )
}

export default Version;