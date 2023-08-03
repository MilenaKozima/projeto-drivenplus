import styled from "styled-components"
import { Link } from "react-router-dom"
import FormRegistration from "./FormRegistration";


export default function RegistrationPage(){
    return(
        <RegistrationContainer>
            <FormRegisContainer>
                <FormRegistration/>
            </FormRegisContainer>
            <Link to={'/'}>
            <p>Já possuí uma conta? Entre</p>
            </Link>
        </RegistrationContainer>
    );
}

const RegistrationContainer = styled.div`
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

const FormRegisContainer = styled.div`
    display: flex;
    flex-direction: column;
`