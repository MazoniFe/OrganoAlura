import './Form.css'

import InputText from "../InputText"
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('Programação');

    const save = (event) => {
        event.preventDefault();
        props.register({
            name,
            jobTitle,
            image,
            team
        })
        setName('');
        setJobTitle('');
        setImage('');
        setTeam('Programação');
    }

    return (
        <section className="main-form">
            <form onSubmit={save}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    required={true}
                    label="Nome" 
                    value={name}
                    onTyped={value => setName(value)}
                />
                <InputText
                    required={true}
                    label="Cargo"
                    value={jobTitle}
                    onTyped={value => setJobTitle(value)}
                />
                <InputText
                    required={true}
                    label="Imagem"
                    value={image}
                    onTyped={value => setImage(value)}
                />

                <DropDown
                    required={true}
                    label="Team"
                    itens={props.teams}
                    value = {team}
                    selectOption = {optionValue => {
                        setTeam(optionValue)
                    }}
                />
                <Button>Criar Card</Button>
            </form>

        </section>
    )
}

export default Form;