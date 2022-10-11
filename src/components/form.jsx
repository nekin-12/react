import './css/form.css';
import { useState, useEffect } from 'react';

const Form = (props) => {

    const [nameState, setNameState] = useState('default@gmail.com');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [nameIsTouched, setNameIsTouched] = useState(false);

    useEffect(() => {
        if (nameIsValid) console.log('inside useEffect')
    }, [nameIsValid]);

    const nameChangeHandler = (e) => {
        setNameState(e.target.value);
    };

    const nameBlurHandler = (e) => {
        setNameIsTouched(true);

        if (nameState.trim() === '') {
            setNameIsValid(false)
            return;
        }

    }

    const forSubmissionHandler = (event) => {
        event.preventDefault();
        setNameIsTouched(true);

        if (nameState.trim() === '') {
            setNameIsValid(false)
            return;
        }
        setNameIsValid(true);


        // .... traitement exemple: requete POST


        setNameState('');
    };

    const nameInputIsInvalid = !nameIsValid && nameIsTouched;
    const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form class="form" onSubmit={forSubmissionHandler}>
            <h2>Welcome</h2>
            <div class={nameInputClasses}>
                <div class="col">
                    <div class="form-email">
                        <input value={nameState} onChange={nameChangeHandler} onBlur={nameBlurHandler} type="email" name="email" id="email" placeholder="E-mail*" />
                    </div>
                    {nameInputIsInvalid && (
                        <p className='error-text'>Email cannot be empty</p>
                    )}

                    <br />
                    <div class="form-pwd">
                        <input type="password" name="password" id="password" placeholder="Password*" />
                    </div>
                    <br />
                </div>
            </div>
            <div className="form-submit">
                <input class="button" type="submit" value="Connexion" />
            </div>
            {nameState}
        </form>
    )
}

export { Form };