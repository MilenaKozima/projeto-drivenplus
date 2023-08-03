import styled from "styled-components"

export default function FormLogin(){
    return (
        <FormLoginCon>
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
                ENTRAR
            </button>
        </FormLoginCon>
    );
}

const FormLoginCon = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 84px;
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