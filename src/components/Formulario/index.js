import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = ({ times, aoColaboradorCadastrado, cadastrarTime }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (e) => {
        e.preventDefault();
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const aoSubmeterNovoTime = (e) => {
        e.preventDefault()
        cadastrarTime({
            nome: nomeTime,
            cor: corTime
        })
        setNomeTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                    <CampoTexto
                        obrigatorio={true}
                        label='Nome'
                        placeholder='Digite seu nome'
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label='Cargo'
                        placeholder='Digite seu cargo'
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
                    />
                    <CampoTexto
                        label='Imagem'
                        placeholder='Informe o endereço da imagem'
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label='Time'
                        itens={times}
                        valor={time}
                        aoAlterado={valor => setTime(valor)}
                    />
                    <Botao>
                        Criar Card
                    </Botao>
            </form>
            <form onSubmit={aoSubmeterNovoTime}>
                <h2>Preencha os dados para criar um time.</h2>
                    <CampoTexto
                        obrigatorio={true}
                        label='Nome'
                        placeholder='Digite o nome do time'
                        valor={nomeTime}
                        aoAlterado={valor => setNomeTime(valor)}
                    />
                    <div>
                        <label>Escolha a cor do time</label>
                        <input
                            type='color'
                            onChange={e => setCorTime(e.target.value)}
                        />
                    </div>
                    <Botao>
                        Criar Time
                    </Botao>
            </form>
        </section>
    )
}

export default Formulario;