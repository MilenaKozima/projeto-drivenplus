import { styled } from "styled-components";
import logoBranca from '../../assets/logo-plano-branco.png'
import tasklist from '../../assets/fluent_clipboard-task-list-rtl-20-regular.png';
import arrow from '../../assets/fa-solid_arrow-left.png';
import bill from "../../assets/fa-solid_money-bill-wave.png"
import { Link } from "react-router-dom";
import FormCard from "./FormCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function FormSubs() {

    const parametro = useParams();
    console.log(parametro);
    const [planos, setPlanos] = useState([]);
    const { user } = useContext(UserContext);

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${parametro.idPlano}`, config)

        promise.then(resp => {
            console.log(resp.data);
            setPlanos(resp.data)
        });
        promise.catch(erro => console.log(erro.response.data))
    }, [])

    return (
        <Teste>
            <Link to={'/subscriptions'}>
                <img className="arrow-img" src={arrow} alt="" />
            </Link>
            <FormSubsContainer>
                <LogoContainer>
                    <img src={planos.image} alt="" />
                    <p>{planos.name}</p>
                </LogoContainer>
                <InfoContainer>

                    <BeneficioPreco>
                        <div>
                            <img src={tasklist} alt="" />
                            <h1>Benefícios</h1>
                        </div>
                        {planos.perks && planos.perks.map((per) => (
                            <p key={per.id}>{per.id}. {per.title}</p>
                        ))}

                        <div>
                            <img src={bill} alt="" />
                            <h1> Preço</h1>
                        </div>
                        <p>R$ {planos.price} cobrados mensalmente</p>
                    </BeneficioPreco>

                    <FormCard plano={planos}/>

                </InfoContainer>
            </FormSubsContainer>
        </Teste>
    );
}

const Teste = styled.div`
    background-color: #0E0E13;
    img.arrow-img{
            width: 28px;
            height: 32px;
            margin-left: 22px;
            margin-top: 22px;
        }
`

const FormSubsContainer = styled.div`
        background-color: #0E0E13;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 128px;
    img{
        width: 139px;
        height: 95px;
    }
    p{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 32px;
        margin-top: 12px;
        font-weight: 700; 
    }
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 13px;
`

const BeneficioPreco = styled.div`
    display: flex;
    flex-direction: column; 
    margin-left: 40px;
    width: 299px;
    margin-left: 0px;
    margin-top: 10px;
    color: #FFFFFF;
    div{
        display: flex;
        align-items: center;
        margin-top: 12px;
        margin-bottom: 10px;

        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 16px;
        margin-top: 9px;
        font-weight: 400; 
    }
    img{
        width: 20px;
        height: 20px;
    }
    h1{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 16px;
        margin-top: 9px;
        font-weight: 400; 
        
    }
`
