import './Colaborador.css';
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, aoDeletarColaborador }) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                onClick={() => aoDeletarColaborador(colaborador.id)}
                className='deletar'
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={`Imagem do ${colaborador.nome}`} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;