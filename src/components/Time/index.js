import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = ({ time, aoDeletar, colaboradores, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/images/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.6) }}>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <input onChange={e => mudarCor(e.target.value, time.id)} value={time.cor} className='input-cor-primaria' type="color" name="" id="" />
            <div className='colaboradores'>
                {colaboradores.map(colaborador => {
                    return (
                        <Colaborador 
                            key={colaborador.id}
                            corDeFundo={time.cor}
                            aoDeletarColaborador={aoDeletar}
                            colaborador={colaborador}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Time;