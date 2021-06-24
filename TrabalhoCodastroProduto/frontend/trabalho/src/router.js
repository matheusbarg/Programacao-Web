import React from "react";
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import CadastroProdutos from './paginas/CadastroProdutos/CadastroProdutos';
import menu from './paginas/menu';


function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact={true} component={menu} />
        <Route  path="/CadastroUsuario" component={CadastroUsuario} />
        <Route  path="/CadastroProdutos" component={CadastroProdutos} />
        
      </Switch>
    </BrowserRouter>
    );
  }


  export default Routes;