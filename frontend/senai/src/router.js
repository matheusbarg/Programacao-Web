import React from "react";
import { BrowserRouter,  Route, Switch } from "react-router-dom";

import Teste from './paginas/Teste'
import HelloMessage from './HelloMessage';
import Livro from './paginas/Livro';
import CadastroLivro from './paginas/Cadastro';



function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact={true} component={HelloMessage} />
        <Route  path="/Teste" component={Teste} />
        <Route  path="/Livro" component={Livro} />
        <Route  path="/CadastroLivro" component={CadastroLivro} />
      </Switch>
    </BrowserRouter>
    );
  }


  export default Routes;