import React from 'react';

import './App.css'
import {Card} from "./components";

const App = () => {
    return (
        <div className={'wrap'}>
          <Card/>
          <Card/>
          <Card/>
        </div>
    );
};

export default App;