import React, {useState} from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'

function CadastroUsuario() {

    const [idusuario, setID] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    
    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            idusuario,
            nome,
            email,
            senha,
            telefone,
            
        };

        try {
            console.log(dados);
            const response = await api.put('usuario', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do usuario é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar usuario " + error.message);            
        }
    }

    return (
        <div id="inputs">
            <div>
                <h1>Cadastro de Usuarios</h1>

                <form onSubmit={handleCadastro}>
                    
                <TextField
                            id="ID"
                             label="ID"
                             value={idusuario}
                            onChange={e => setID(e.target.value)}
                            variant="filled"/>
                      
                <TextField
                            id="nome"
                             label="NOME"
                             value={nome}
                            onChange={e => setNome(e.target.value)}
                            variant="filled"/>
                          
                <TextField
                            id="email"
                             label="EMAIL"
                             value={email}
                            onChange={e => setEmail(e.target.value)}
                            variant="filled"/>                    
                    

                <TextField
                            id="senha"
                            label="SENHA"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                            variant="filled"/>       
                       
                <TextField
                            id="telefone"
                             label="TELEFONE"
                             value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                            variant="filled"/> 
                        
                  <Button variant="contained" color="primary" type="submit" disableElevation>Cadastro</Button>
                </form>
    

            </div>
        </div>

    );
}

export default CadastroUsuario;