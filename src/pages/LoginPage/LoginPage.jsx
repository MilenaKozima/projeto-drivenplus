import styled from "styled-components"
import LogoHome from '../../assets/logo-home.png';
import FormLogin from "./FormLogin";
import { Link, useNavigate } from "react-router-dom"

export default function LoginPage(){


    
    return(
        <LoginContainer>
            <LogoHomeContainer>
                <img src={LogoHome} alt="Driven+" />
            </LogoHomeContainer>
            <FormLoginContainer>
                <FormLogin/>
            </FormLoginContainer>
            <Link to={'/sign-up'}>
            <p>Não possui uma conta? Cadastre-se</p>
            </Link>
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    background-color: #0E0E13;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    height: 100vh;
    p{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 14px;
        margin-top: 24px;
    }
`

const LogoHomeContainer = styled.div`
    width: 299px;
    height: 49px;
    margin-top: 134px;
`
const FormLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
`