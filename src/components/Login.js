import React from 'react';
import './Login.css';
import {Button } from '@material-ui/core';
import {auth, provider} from '../firebase';
import { actionTypes } from '../reducer';
import {useStateValue} from '../StateProvider.js';


function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({ 
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login__container'>
                <img 
                    src= "https://www.citypng.com/public/uploads/preview/-41601137358i5wpsaam2i.png"
                    alt=""
                />

                <div className="login__text">
                    <h1>  to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>

                
            </div>
            <h4> Made by Tushar</h4>
        </div>
    );
}

export default Login;
