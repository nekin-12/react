import { useState } from 'react'; 

import useInput from './useInput';


// En comparaison avec l'ancien SimpleInput celui-ci effectue :

// -input actif ou non, 
// -supression des espaces inutiles
// -verification de si le form est compléter ou non alors le bouton envoie les value
// -affiche une erreur s'il manque un input
// -export en default


const SimpleInput = (props) => { 

  const {  //fonction déclaration des variables 

    value: enteredName, 

    isValid: enteredNameIsValid, 

    hasError: nameInputHasError, 

    valueChangeHandler: nameChangedHandler, 

    inputBlurHandler: nameBlurHandler, 

    reset: resetNameInput 

  } = useInput(value => value.trim() !== ''); 
   

  const [enteredEmail, setEnteredEmail] = useState(''); // Fonction permettant de récuperer l'entrer de l'uilisateur 

  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false); // boolean permettant de connaitre l'état (actif ou non) de l'input email

  const enteredEmailIsValid = enteredEmail.includes('@'); //

  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched; //

  let formIsValid = false; //


  if (enteredNameIsValid && enteredEmailIsValid) { //

    formIsValid = true; 
  } 

  const emailInputChangeHandler = (event) => { //

    setEnteredEmail(event.target.value); 

  }; 

  const emailInputBlurHandler = (event) => { 

    setEnteredEmailTouched(true); 

  }; 

  const formSubmissionHandler = (event) => { 

    event.preventDefault(); 

    if (!enteredNameIsValid) { 

      return; 

    } 

    console.log(enteredName); 

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM 

    resetNameInput(); 

    setEnteredEmail(''); 

    setEnteredEmailTouched(false); 

  }; 

  const nameInputClasses = nameInputHasError 

    ? 'form-control invalid' 

    : 'form-control'; 

  const emailInputClasses = enteredEmailIsInvalid 

    ? 'form-control invalid' 

    : 'form-control'; 

  return ( 

    <form onSubmit={formSubmissionHandler}> 

      <div className={nameInputClasses}> 

        <label htmlFor='name'>Your Name</label> 

        <input 

          type='text' 

          id='name' 

          onChange={nameChangedHandler} 

          onBlur={nameBlurHandler} 

          value={enteredName} 

        /> 

        {nameInputHasError && ( 

          <p className='error-text'>Name must not be empty.</p> 

        )} 

      </div> 

      <div className={emailInputClasses}> 

        <label htmlFor='email'>Your E-Mail</label> 

        <input 

          type='email' 

          id='email' 

          onChange={emailInputChangeHandler} 

          onBlur={emailInputBlurHandler} 

          value={enteredEmail} 

        /> 

        {enteredEmailIsInvalid && ( 

          <p className='error-text'>Please enter a valid email.</p> 

        )} 

      </div> 

      <div className='form-actions'> 

        <button disabled={!formIsValid}>Submit</button> 

      </div> 

    </form> 

  ); 

}; 
 

export default SimpleInput; 
