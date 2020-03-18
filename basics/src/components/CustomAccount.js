import React, { Fragment, useState, useContext, useEffect } from 'react';
import { MyAppContext } from '../contexts/MyAppContext';


const CustomAccount = () => {
    const { isModalOpen, setIsModalOpen, user, setUser, isLoggedIn, setIsLoggedIn } = useContext(MyAppContext);

    return (
        <Fragment>
            <h1>Hello, this is custom account</h1>
        </Fragment>
    )
}

export default CustomAccount;