import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, nome, cor, aoDeletarColaborador, colaboradores, mudarCor }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(cor, 0.6) }}>
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            <input onChange={e => mudarCor(e.target.value, time.id)} value={cor} className='input-cor-primaria' type="color" name="" id="" />
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return (
                        <Colaborador 
                            key={colaborador.id}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            corPrimaria={cor}
                            aoDeletar={aoDeletarColaborador}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time;