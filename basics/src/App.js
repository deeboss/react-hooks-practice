import React from 'react';
import './App.css';

import MyAppContextProvider from './contexts/MyAppContext';

import MyFirstComponent from './components/MyFirstComponent';
import MySecondComponent from './components/MySecondComponent';

function App() {
  return (
    <div className="App">
      <MyAppContextProvider>
        This text is from App.js
        <hr />
        <MyFirstComponent/>
        <MySecondComponent/>
      </MyAppContextProvider>
    </div>
  );
}

export default App;
