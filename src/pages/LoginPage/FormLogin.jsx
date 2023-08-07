import { useState } from "react";
import styled from "styled-components"
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { PlanContext } from "../../contexts/PlanContext";

export default function FormLogin(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);
    const {plan, setPlan} = useContext(PlanContext);
    const navigate = useNavigate();

    function login(e) {

        e.preventDefault();
        const user = {
            email: email,
            password: password
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", user);
        promise.then(resp => {
            if(resp.data.membership===null){
            navigate('/subscriptions')
            console.log(resp.data);
            const {id, name, image, token} = resp.data;
            setUser({id, name, image, token});
        } else {
            const {id, name, image, perks} = resp.data.membership;
            setPlan({id, name, image, perks});
            const {token} = resp.data;
            setUser({token});
            navigate('/home')
        }
        })
        promise.catch(erro => {
            alert(erro.response.data.message)
        })

    }

    return (
        <FormLoginCon onSubmit={login}>
            <input 
            type="email"
            placeholder="E-mail"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
            />
            <input 
            type="password"
            placeholder="Senha"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
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