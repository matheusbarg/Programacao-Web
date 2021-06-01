import React from "react";
import { BrowserRouter,  Route, Switch } from "react-router-dom";

import Teste from './paginas/Teste'
import HelloMessage from './HelloMessage';



function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact={true} component={HelloMessage} />
        <Route  path="/Teste" component={Teste} />
      </Switch>
    </BrowserRouter>
    );
  }


  export default Routes;