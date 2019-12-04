import React from 'react';

import Button from '@material-ui/core/Button';
import InputForm from '../InputForm/InputForm';
import useStyles from '../../common/DialogForm.style';

export default function NewRecipe(props) {
  const { addRecipe } = props;

  const classes = useStyles();
  const initInput = {name: "", ingredients: "", id: ""};
  
  const [ edit, setEdit ] = React.useState(false);  

  const handleOpen = () => {
    setEdit(true);
  };

  const handleClose = () => {
    setEdit(false);
  };

  const handleNewRecipe = (newRecipe) => {
      addRecipe(newRecipe);
      handleClose();
  };

  return (
    <div>
      <Button
        onClick={ handleOpen }
        className={classes.newRecipeButton}
        variant="outlined"
        color="primary"
      > 
        Add new Recipe
      </Button>
      { edit &&
        <InputForm
          id={initInput.id}
          name={initInput.name}
          edit={edit}
          ingredients={initInput.ingredients}
          handleInput = {handleNewRecipe}
          cancelConfirmation = {handleClose}
        />
      }
    </div>
  );
}