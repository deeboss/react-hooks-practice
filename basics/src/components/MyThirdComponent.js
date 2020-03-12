import React, { Fragment, useState, useContext } from 'react';


const MyThirdComponent = () => {
    const [ number, setNumber ] = useState(0);

    const [ userName, setUserName ] = useState([
        'John'   
    ]);

    const [ person, setPerson ] = useState({
        id: 0,
        name: 'John',
        age: 30,
        email: 'john@example.com'
    })

    return (
        <Fragment>
            <h1>Hello from MyThirdComponent!</h1>
            <h2>My username is {userName}</h2>
            <h2>These are my personal details:</h2>
            <ul>
                <li>{person.id}</li>
                <li>{person.name}</li>
                <li>{person.age}</li>
                <li>{person.email}</li>
            </ul>
        </Fragment>
    )
}

export default MyThirdComponent;