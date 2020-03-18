import React, { Fragment, useState, useContext, useEffect } from 'react';

import LoginModal from "./LoginModal";
import { MyAppContext } from '../contexts/MyAppContext';

const MyThirdComponent = () => {
    const [ number, setNumber ] = useState(0);
    
    const { isModalOpen, setIsModalOpen, user, setUser, isLoggedIn, setIsLoggedIn } = useContext(MyAppContext);

    const loginUser = e => {
        setIsLoggedIn(true);
    };



    return (
        <Fragment>
            {/* <h1>The number is {number}</h1>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <br />
            <br />
            <br />
            <button onClick={() => setNumber(number - 1)}>-</button> */}

            <ul className="navbar">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>

                {/* Check if User is logged in. If the User is not logged in, then render the "LoginModal Component" */}
                { !isLoggedIn && <LoginModal /> }

                {/* If User is logged in, then render the "LoggedIn Component" */}
                { isLoggedIn && <div>
                    Welcome Back, {user.name}!
                    </div>}
            </ul>
        </Fragment>
    )
}

export default MyThirdComponent;