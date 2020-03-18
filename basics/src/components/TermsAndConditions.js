import React, { Fragment, useState, useContext, useEffect } from 'react';
import { MyAppContext } from '../contexts/MyAppContext';


const TermsAndConditions = () => {
    const { isModalOpen, setIsModalOpen, user, setUser, isLoggedIn, setIsLoggedIn, loginStep, setLoginStep } = useContext(MyAppContext);

    const confirmTermsAndConditions = e => {
        setLoginStep(2);
    }
    return (
        <Fragment>
            <h1>Hello, this is terms and conditions</h1>
            <button onClick={confirmTermsAndConditions}>Click me to go next</button>
        </Fragment>
    )
}

export default TermsAndConditions;