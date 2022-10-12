import './css/form.css';
import { useState, useEffect } from 'react';

const Form = (props) => {

    //Login DB infos
    const database = [
        {
            email: "test@gmail.com",
            pwd: "1234"
        }
    ]

    const [mailState, setMailState] = useState('');
    const [mailIsValid, setMailIsValid] = useState(false);
    const [mailIsTouched, setMailIsTouched] = useState(false);

    const [pwdState, setPwdState] = useState('');
    const [pwdIsValid, setPwdIsValid] = useState(false);
    const [pwdIsTouched, setPwdIsTouched] = useState(false);

    useEffect(() => {
        if (mailIsValid, pwdIsValid) console.log('mail and pwd is ok')
    }, [mailIsValid, pwdIsValid]);

    const mailChangeHandler = (e) => {
        setMailState(e.target.value);
    };
    const pwdChangeHandler = (e) => {
        setPwdState(e.target.value);
    };

    const mailBlurHandler = (e) => {
        setMailIsTouched(true);

        if (mailState.trim() === '') {
            setMailIsValid(false)
            return;
        }
    };
    const pwdBlurHandler = (e) => {
        setPwdIsTouched(true);

        if (pwdState.trim() === '') {
            setPwdIsValid(false)
            return;
        }
    };

    const forSubmissionHandler = (event) => {
        event.preventDefault();

        setMailIsTouched(true);
        setPwdIsTouched(true);

        if (mailState.trim() === '') {
            setMailIsValid(false)
            return;
        }
        setMailIsValid(true);

        setPwdState('');
        if (pwdState.trim() === '') {
            setPwdIsValid(false)
            return;
        }
        setPwdIsValid(true);

        setPwdState('');
    };

    const submitHandle = (event) => {
        event.preventDefault();

    }

    const mailInputIsInvalid = !mailIsValid && mailIsTouched;
    const mailInputClasses = mailInputIsInvalid ? 'form-control invalid' : 'form-control';
    const pwdInputIsInvalid = !pwdIsValid && pwdIsTouched;
    const pwdInputClasses = pwdInputIsInvalid ? 'form-control invalid' : 'form-control';

    return (
        <form class="form" onSubmit={forSubmissionHandler}>
            <h2>Welcome</h2>
            <div>
                <div class="col">
                    <div class="form-email" className={mailInputClasses}>
                        <input value={mailState} onChange={mailChangeHandler} onBlur={mailBlurHandler} type="email" name="email" id="email" placeholder="E-mail*" />
                    </div>
                    {mailInputIsInvalid && (
                        <p className='error-text'>Email cannot be empty</p>
                    )}

                    <br />

                    <div class="form-pwd" className={pwdInputClasses}>
                        <input value={pwdState} onChange={pwdChangeHandler} onBlur={pwdBlurHandler} type="password" name="password" id="password" placeholder="Password*" />
                    </div>
                    {pwdInputIsInvalid && (
                        <p className='error-text'>Password cannot be empty</p>
                    )}
                    
                    <br />
                </div>
            </div>
            <div className="form-submit">
                <input onSubmit={submitHandle} class="button" type="submit" value="Connect" />
            </div>
            
        </form>
        
    )
    console.log(mailState)
}

export { Form };