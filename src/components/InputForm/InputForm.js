import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../common/DialogForm.style';

export default function InputForm (props) {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(false);
  const { id, name, ingredients, edit } = props;
  const [input, setInput] = React.useState({name: name, ingredients: ingredients, id: id});

  const handleRecipeName = ({target: { value } }) => {
    setInput({...input, name: value, id: Date.now() });    
  };

  const handleIngredients = ({target: { value } }) => {
    setInput({...input, ingredients: value });    
  };

 const cancelEdit = () => {
  props.cancelConfirmation() 

 }

  const getEditedRecipe = () => {
    props.editedRecipe(input)  
  };

  return (    
      <Dialog 
        disableBackdropClick
        disableEscapeKeyDown 
        open = { edit }
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
            defaultValue={name}
          />
          <TextField
            id="standard-basic"
            className={classes.textFieldIngredients}
            label="Ingredients (separated by commas)"
            margin="normal"
            multiline={true}
            fullWidth={true}
            onChange={handleIngredients}
            defaultValue={ingredients}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelEdit} color="primary">
          Close
        </Button>
        <Button onClick={getEditedRecipe} color="primary">
          add Recipe
        </Button>
      </DialogActions>
      </Dialog>
  );
}