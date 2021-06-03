import React, {useState} from 'react';
import api from '../Services/api';

function CadastroLivro() {

    const [descricao, setDescricao] = useState('');
    const [editora, setEditora] = useState('');
    const [isbn, setIsbn] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [assunto, setAssunto] = useState('');
    const [autor, setAutor] = useState('');

    async function handleCadastro(e) {
        e.preventDefault();

        const dados = {
            descricao,
            editora,
            isbn,
            quantidade,
            assunto,
            autor
        };

        try {
            console.log(dados);
            const response = await api.post('book', dados);
            const id = response.data.id;
            console.log(response.data);
            alert("o id do livro é " + id);
            // history.push('/');
        } catch (error) {
            alert("Erro ao cadastrar livro " + error.message);            
        }
    }

    return (
        <div>
            <div>
                <h1>Cadastro de Livro</h1>

                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Descricao do livro"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}/> 

                    <input 
                        placeholder="Editora do livro"
                        value={editora}
                        onChange={e => setEditora(e.target.value)}/> 

                    <input 
                        placeholder="Isbn"
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}/> 

                    <input 
                        placeholder="quantidade"
                        value={quantidade}
                        onChange={e => setQuantidade(e.target.value)}/> 

                    <input 
                        placeholder="assunto"
                        value={assunto}
                        onChange={e => setAssunto(e.target.value)}/> 

                    <input 
                        placeholder="autor"
                        value={autor}
                        onChange={e => setAutor(e.target.value)}/> 
                    <button className="button" type="submit">Cadastrar Livro</button>
                </form>
    

            </div>
        </div>

    );
}

export default CadastroLivro;