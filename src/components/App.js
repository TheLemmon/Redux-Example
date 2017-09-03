import React from 'react';
import NavBar from './NavBar'
import Main from './Main'

const App = ({store}) => {
    return (
      <div>
        <NavBar />
        <Main />
      </div>
    );
}

export default App;
