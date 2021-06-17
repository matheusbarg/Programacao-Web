import React from 'react';
import Button from '@material-ui/core/Button';
import './menu.css';


function menu() {
    return(
        <div id='menu'>
            <h1>Menu</h1>
            <a href="http://localhost:3000/Livro">
            <Button variant="contained" color="primary" type="submit" >Livros</Button></a>   
            <a href="http://localhost:3000/CadastroLivro">
            <Button variant="contained" color="primary" type="submit" >Cadastro Livro</Button></a>    
            <a href="http://localhost:3000/CadastroUsuario">
            <Button variant="contained" color="primary" type="submit" >Cadastro Usuario</Button></a>    

        </div>
    )

}
export default menu;