// == Import npm
import React, { useState } from 'react';
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

return(
<div className="app">
  {
    loading ?
    <RingLoader color={'#380036'} loading={loading} size={150} />
    :
  <Switch>
    <Route exact path="/">
      {isLogged && <Redirect to="/chat" />}
      {!isLogged && <ConnectionPage isLogged={setIsLogged} loader={setLoading}/>}
    </Route>
    {isLogged &&
      <Route exact path="/chat">
        <ChatPage />
      </Route>
    }
  </Switch>
  }
</div>
  )
  
}


// == Export
export default App;
