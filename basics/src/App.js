import React from 'react';
import './App.css';

import MyAppContextProvider from './contexts/MyAppContext';

import MyFirstComponent from './components/MyFirstComponent';
import MySecondComponent from './components/MySecondComponent';
import MyThirdComponent from './components/MyThirdComponent';

function App() {
  return (
    <div className="App">
      <MyAppContextProvider>
        {/* This text is from App.js */}
        <MyFirstComponent/>
        <MySecondComponent/>
        <MyThirdComponent/>
      </MyAppContextProvider>
    </div>
  );
}

export default App;
