import './Colaborador.css';
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = ({ nome, cargo, imagem, corPrimaria, aoDeletar }) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} onClick={aoDeletar} className='deletar'/>
            <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
                <img src={imagem} alt={`Imagem do ${nome}`} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;