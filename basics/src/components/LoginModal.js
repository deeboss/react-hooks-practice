import React, { Fragment, useState, useContext, useEffect } from 'react';
import { MyAppContext } from '../contexts/MyAppContext';

import LoginModalDefault from './LoginModalDefault';
import TermsAndConditions from './TermsAndConditions';
import CustomAccount from './CustomAccount';

const LoginModal = () => {
    const { isModalOpen, setIsModalOpen, setLoginStep, loginStep, user, setUser, isLoggedIn, setIsLoggedIn } = useContext(MyAppContext);

    const loginComponentSteps = [{
        component: <LoginModalDefault />,
    }, {
        component: <TermsAndConditions />,
    }, {
        component: <CustomAccount />,
    }];
   
    const openModal = e => {
        setIsModalOpen(true);
    }

    const closeModal = e => {
        setIsModalOpen(false);
        setLoginStep(0);
    }

    return (
        <Fragment>
            <div
                onClick={openModal}
            >
            Sign up / Register
            </div>

            { isModalOpen && 
                <div className="modal">
                    <button onClick={closeModal}>Close</button>
                    {loginComponentSteps[loginStep].component}
                </div>
            }
        </Fragment>
    )
}

export default LoginModal;