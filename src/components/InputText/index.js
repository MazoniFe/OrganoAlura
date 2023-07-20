import './InputText.css'

const InputText = (props) => {
    const placeHolder =
        props.label !== "Imagem" ? `Digite seu ${props.label}` :
            `Digite o endereço da sua ${props.label}`;

    const changeValue = (event) => {
        props.onTyped(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.value} 
                onChange={changeValue}
                required={props.required}
                placeholder={placeHolder}>
            </input>
        </div>
    )
}

export default InputText;