import styled from "styled-components"

export default function FormRegistration(){
    return (
        <FormRegis>
            <input 
            type="text"
            placeholder="Nome"
            required
            />
            <input 
            type="number"
            placeholder="CPF"
            required
            />
            <input 
            type="email"
            placeholder="E-mail"
            required
            />
            <input 
            type="password"
            placeholder="Senha"
            required
            />
            <button type="submit">
                CADASTRAR
            </button>
        </FormRegis>
    );
}

const FormRegis = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 147px;
    input{
        width: 299px;
        height: 52px;
        border-radius: 8px;
        border-style: none;
        background-color: #FFFFFF;
        margin-top: 16px;
        font-family: 'Roboto';
        font-size: 14px;
    }
    button{
        width: 299px;
        height: 52px;
        border-radius: 8px;
        border-style: none;
        background-color:#FF4791;
        margin-top: 24px;
        font-family: 'Roboto';
        font-size: 14px;
        color: #FFFFFF;
    }
`