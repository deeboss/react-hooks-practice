import React, { Fragment, useState, useContext, useEffect } from 'react';
import { MyAppContext } from '../contexts/MyAppContext';


const LoginModalDefault = () => {
    const { isModalOpen, setIsModalOpen, user, setUser, isLoggedIn, setIsLoggedIn, setLoginStep } = useContext(MyAppContext);

    const handleChange = e => {
        // setUserName(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }

    const closeModal = e => {
        setIsModalOpen(false);
    }

    const loginUser = e => {
        if (!user.name || !user.password) {
        // Check if the input values are empty
            // If empty, then don't close modal, throw error
            console.log("You have empty fields!");
        } else {
        // Else, check if the input values match the values the database expects
            // If it doesn't match, then throw error

            let expectedUser = 'don';
            let expectedPassword = '123';

            if (user.name === expectedUser && user.password === expectedPassword) {
                console.log('access granted!');
                // If it does match, then close modal, set login to true
                closeModal();
                setIsLoggedIn(true);

            } else {
                console.log("access denied");
            }

        }
    }

    const handleOtherLogin = e => {
        console.log(e.target.name);

        switch (e.target.name) {
            case "loginWithKakao":
                // Run the 3rd party authentication to get the access Token
                
                // Do a GET request from our server/database to verify account details

                // If that's successful && it is an existing Kakaotalk user account then close modal and login.

                // Else, if that's successful && it is a new user account, then direct them to Terms And Conditions
                setLoginStep(1);
                
                break;

            case "loginWithFacebook":

                // Run the 3rd party authentication to get the access Token
                
                // Do a GET request from our server/database to verify account details

                // If that's successful && it is an existing Facebook user account then close modal and login.

                // Else, if that's successful && it is a new user account, then direct them to Terms And Conditions

                setLoginStep(1);

                break;

            case "createNewAccount":

                // Direct them to Terms And Conditions
                setLoginStep(1);
                
                break;

            default:
                console.log("hello!");
                break;
        }
    }

    return (
        <Fragment>
            <div>
                <h2>Login</h2>
                <div>
                    <label htmlFor="name">Your name</label>
                    <input onChange={handleChange} type="text" name="name" id="name" / >
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} type="password" name="password" id="password" / >
                </div>
                <button onClick={loginUser}>Login</button>
            </div>
            <hr />
            <div>
                <button onClick={handleOtherLogin} name="loginWithKakao">Login with Kakaotalk</button> 
                <button onClick={handleOtherLogin} name="loginWithFacebook">Login with Facebook</button> 

                <div>Are you not a member yet? <button onClick={handleOtherLogin} name="createNewAccount">Make an account</button></div>
            </div>
        </Fragment>
    )
}

export default LoginModalDefault;