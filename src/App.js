import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat.js';
import Login from './components/Login.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider.js';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
	// BEM Naming convention. 
    <div className='app'>

      !{!user ? (
        <Login />
      ): (
        <div className='app__body'>
          <Router>
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId'>
                 <Chat/>
              </Route>

              <Route path='/'>
                 <Chat/>
              </Route>

            </Switch>
          </Router>
	      </div>
      )}

    </div>
  );
}

export default App;
