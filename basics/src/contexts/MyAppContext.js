import React, { createContext, useState } from 'react';

export const MyAppContext = createContext();

const MyAppContextProvider = ({ children }) => {
    const [ greetingsText ] = useState([
        'hello from my context!'
    ]);

    return (
        <MyAppContext.Provider value={{ greetingsText }}>
            { children }
        </MyAppContext.Provider>
    )
}

export default MyAppContextProvider;