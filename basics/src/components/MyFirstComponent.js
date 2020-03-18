import React, { Fragment, useState, useContext } from 'react';

import { MyAppContext } from '../contexts/MyAppContext';

const MyFirstComponent = () => {
    const { user }  = useContext(MyAppContext);


    // console.log(greetingsText);

    return (
        <Fragment>
            {/* <h3>Your name is: {user.name}</h3>
            <h3>Your email is: {user.email}</h3>
            <h3>Your phone number is: {user.number}</h3> */}
        </Fragment>
    )
}

export default MyFirstComponent;