import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../common/DialogForm.style';

export default function NewRecipe(props) {
  const { addRecipe } = props;
  
  const classes = useStyles();
  const initErrorMessages = {name: false, ingredients: false};
  const initInput = {name: "", ingredients: "", id: ""};

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState(initInput);  
  const [error, setError] = React.useState(initErrorMessages);

  const handleRecipeName = ({target: { value } }) => {
    setInput({...input, name: value });
    setError({...error, name: false});
  };

  const handleIngredients = ({target: { value } }) => {
    setInput({...input, ingredients: value, id: Date.now() });
    setError({...error, ingredients: false})
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError(initErrorMessages);
    setInput(initInput);
  }; 

  const handleErrors = () => {
    input.name === ""
      ? setError({...error, name: true})
      : setError({...error, ingredients: true})
  };

  const handleNewRecipe = () => {    
    const {name , ingredients} = input;

    if (name === "" || ingredients === "") {
      handleErrors();
    } else {
      addRecipe(input);
      handleClose();
    }
  };

  return (
    <div>
      <Button
        onClick={ handleClickOpen }
        className={classes.newRecipeButton}
        variant="contained"
        color="primary"
      > 
        Add new Recipe
      </Button>
      <Dialog 
        disableBackdropClick
        disableEscapeKeyDown 
        open = { open }
        onClose={ handleClose }
      >
      <DialogTitle>Fill the form</DialogTitle>
      <DialogContent>
        <form className={classes.container}>
          <TextField
            id="standard-basic"
            className={classes.textFieldRecipeName}
            label="Recipe"
            margin="normal"
            fullWidth={false}
            autoComplete='off'
            onChange={handleRecipeName}
            error={error.name }
            helperText={error.name ? 'Empty field!' : ' '}
          />
          <TextField
            id="standard-basic"
            className={classes.textFieldIngredients}
            label="Ingredients (separated by commas)"
            margin="normal"
            multiline={true}
            fullWidth={true}
            onChange={handleIngredients}
            error={ error.ingredients }
            helperText={ error.ingredients ? 'Empty field!' : ' '}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="secondary"
          className={classes.button}
        >
          Close
        </Button>
        <Button
          onClick={handleNewRecipe}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          add Recipe
        </Button>
      </DialogActions>
      </Dialog>
    </div>
  );
}