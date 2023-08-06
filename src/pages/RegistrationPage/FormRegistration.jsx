import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function FormRegistration(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function signUp(e) {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);
        console.log(cpf);

        const newUser = {
            email: email,
            name: name,
            cpf: cpf,
            password: password
        }

        console.log(newUser);

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', newUser)


            promise.then(resp => {
                navigate('/')
            })
            promise.catch(erro => {
                alert(erro.response.data.message) 
            })

    }

    return (
        <FormRegis onSubmit={signUp}>
            <input 
            id="name"
            type="text"
            placeholder="Nome"
            required
            onChange={e => setName(e.target.value)}
            value={name}
            />
            <input 
            id="cpf"
            type="number"
            placeholder="CPF"
            required
            onChange={e => setCpf(e.target.value)}
            value={cpf}
            />
            <input 
            type="email"
            id="email"
            placeholder="E-mail"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
            />
            <input 
            type="password"
            id="password"
            placeholder="Senha"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
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