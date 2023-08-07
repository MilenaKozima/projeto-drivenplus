import { styled } from "styled-components";
import logoamarela from '../../assets/logo-plano-amarelo.png';
import usuario from '../../assets/fa-solid_user-circle.png';
import { PlanContext } from "../../contexts/PlanContext";
import { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function HomePage() {

    const { plan } = useContext(PlanContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function del() {
        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }

        const promise = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config);
        promise.then(resp => {
            navigate('/subscriptions');
        })
        promise.catch(erro => {
            alert(erro.response.data.message)
        })
    }

    return (
        <HomePageContainer>
            <TopoHomeContainer>
                <img src={plan.image} alt="" />
                <img src={usuario} alt="" />
            </TopoHomeContainer>
            <OpcContainer key={plan.id}>
                <p>Olá, {plan.name}</p>
                {plan && plan.perks && plan.perks.map(b => (
                    <a href={b.link}>
                        <button>{b.title}</button>
                    </a>
                ))}
            </OpcContainer>
            <OpcBaixo>
                <Link to="/subscriptions">
                    <button >Mudar plano</button>
                </Link>
                <button onClick={del}>Cancelar plano</button>
            </OpcBaixo>
        </HomePageContainer>
    );
}

const HomePageContainer = styled.div`
        background-color: #0E0E13;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

`
const TopoHomeContainer = styled.div`
    width: 375px;
    display: flex;
    justify-content: space-between;
    img:nth-child(1){
        width: 74px;
        height: 51px;
        margin-top: 32px;
        margin-left: 38px;
    }
    img:nth-child(2){
        width: 34px;
        height: 34px;
        margin-top: 32px;
        margin-right: 22px;
    }
`
const OpcContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 24px;
        margin-bottom: 45px;
        margin-top: 12px;
        font-weight: 700;
        display: flex;
        justify-content: center;
    }
    button{
        width: 299px;
        height: 52px;
        border-radius: 8px;
        border-style: none;
        background-color:#FF4791;
        margin-top: 8px;
        font-family: 'Roboto';
        font-size: 14px;
        color: #FFFFFF;
    }
`
const OpcBaixo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    bottom: 8px;
    button:nth-child(1){
        width: 299px;
        height: 52px;
        border-radius: 8px;
        border-style: none;
        background-color:#FF4791;
        margin-top: 8px;
        font-family: 'Roboto';
        font-size: 14px;
        color: #FFFFFF;
    }
    button:nth-child(2){
        width: 299px;
        height: 52px;
        border-radius: 8px;
        border-style: none;
        background-color:#FF4747;
        margin-top: 8px;
        font-family: 'Roboto';
        font-size: 14px;
        color: #FFFFFF;
    }
`