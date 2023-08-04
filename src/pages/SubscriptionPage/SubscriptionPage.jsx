import { styled } from "styled-components";
import Planos from "./Planos";
import { Link } from "react-router-dom"

export default function SubscriptionPage(){
    return(
        <SubsContainer>
        <p>Escolha seu plano</p>
        <PlanosContainer>
            <Link to="/subscriptions/ID_DO_PLANO">
            <Planos/>
            <Planos/>
            <Planos/>
            </Link>
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
        margin-top: 67px;
        font-weight: 700;
        }
`

const PlanosContainer = styled.div`
    display: flex;
    flex-direction: column;
`