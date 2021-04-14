// == Import npm
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";

// == Import
import './styles.css';

//== Import des composants
import ConnectionPage from 'src/components/ConnectionPage';
import ChatPage from 'src/components/ChatPage';

// == Composant
const App = () => {
const [loading, setLoading] = useState(false);
const [isLogged, setIsLogged] = useState(false);
const [message, setMessage] = useState('');
const userId = localStorage.getItem('user-ID');

// avec les hook d'effets on enregistre les states souhaité dans le localstorage
useEffect(() => {
 const test = localStorage.getItem('is-logged');
 if (test == 'true') {
   setIsLogged(true);
 }
});

useEffect(() => {
  localStorage.setItem('is-logged', isLogged);
},[isLogged]);

return(
<div className="app">
  {
    loading ?
    <RingLoader color={'#380036'} loading={loading} size={150} />
    :
  <Switch>
    <Route exact path="/">
      {isLogged && <Redirect to="/chat" />}
      {!isLogged && <ConnectionPage isLogged={setIsLogged} loader={setLoading} message={message} setMessage={setMessage}/>}
    </Route>
    {isLogged &&
      <Route exact path="/chat">
        <ChatPage userId={userId} loader={setLoading}/>
      </Route>
    }
  </Switch>
  }
</div>
  )
  
}


// == Export
export default App;
