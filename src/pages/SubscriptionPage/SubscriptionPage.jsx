import { styled } from "styled-components";
import Planos from "./Planos";

export default function SubscriptionPage(){
    return(
        <SubsContainer>
        <p>Escolha seu plano</p>
        <PlanosContainer>
            <Planos/>
            <Planos/>
            <Planos/>
        </PlanosContainer>
        </SubsContainer>
    );
}

const SubsContainer = styled.div`
        background-color: #0E0E13;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 32px;
        margin-bottom: 81px;
        }
`

const PlanosContainer = styled.div`
    display: flex;
    flex-direction: column;
`