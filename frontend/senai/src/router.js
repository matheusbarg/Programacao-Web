import React from "react";
import { BrowserRouter,  Route, Switch } from "react-router-dom";

import Teste from './paginas/Teste'
import HelloMessage from './HelloMessage';
import ListaLivro from './paginas/Livro';
import CadastroLivro from './paginas/CadastroLivro';
import CadastroUsuario from './paginas/CadastroUsuario';


function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact={true} component={HelloMessage} />
        <Route  path="/Teste" component={Teste} />
        <Route  path="/Livro" component={ListaLivro} />
        <Route  path="/CadastroLivro" component={CadastroLivro} />
        <Route  path="/CadastroUsuario" component={CadastroUsuario} />
      </Switch>
    </BrowserRouter>
    );
  }


  export default Routes;