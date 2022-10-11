import './css/form.css';
import React, { useState, useEffect } from 'react';

const Form = (props) =>  {

        const [nameState, setNameState] = useState('default');
        const [nameIsValid, setNameIsValid] = useState(false);
        const [nameIsTouched, setNameIsTouched] = useState(false);

        useEffect(() => {
            if (nameIsValid) console.log('inside useEffect')
        }, [nameIsValid]);

        const nameChangeHandler = (e) => {
            setNameState(e.taget.value);
        };

        const forSubmissionHandler = (event) => {
            event.preventDefault();
        };

        const nameInputIsInvalid = !nameIsValid && nameIsTouched;
        const nameInputClasses = nameInputIsInvalid ? '';

        return (
            <form class="form" onSubmit={forSubmissionHandler}>
                <h2>Welcome</h2>
                <div class="row">
                    <div class="col">
                        <div class="form-email">
                            <input value={nameState} onChange={nameChangeHandler} type="email" name="email" id="email" placeholder="E-mail*" />
                        </div>
                        <br />
                        <div class="form-pwd">
                            <input type="password" name="password" id="password" placeholder="Password*" />
                        </div>
                    </div>
                </div>
                <div class="form-submit" className='form-action'>
                    <input class="button" type="submit" value="Connexion" />
                </div>
                {nameState}
            </form>
        )
}

export { Form };