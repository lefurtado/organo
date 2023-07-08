import './Campo.css';

const Campo = ({ type='', label, valor, obrigatorio, placeholder, aoAlterado }) => {

    const aoDigitar = (e) => {
        aoAlterado(e.target.value);
    }

    return (
        <div className={`campo campo-${type}`}>
            <label htmlFor="">{label}</label>
            <input 
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholder} 
                type={type}
            />
        </div>
    )
}

export default Campo;