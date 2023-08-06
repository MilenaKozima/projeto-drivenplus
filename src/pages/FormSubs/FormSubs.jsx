import { styled } from "styled-components";
import logoBranca from '../../assets/logo-plano-branco.png'
import tasklist from '../../assets/fluent_clipboard-task-list-rtl-20-regular.png';
import arrow from '../../assets/fa-solid_arrow-left.png';
import bill from "../../assets/fa-solid_money-bill-wave.png"
import { Link } from "react-router-dom";
import FormCard from "./FormCard";

export default function FormSubs() {
    return (
        <Teste>
            <Link to={'/subscriptions'}>
                <img className="arrow-img" src={arrow} alt="" />
            </Link>
            <FormSubsContainer>
                <LogoContainer>
                    <img src={logoBranca} alt="" />
                    <p>Driven Plus</p>
                </LogoContainer>
                <InfoContainer>

                    <BeneficioPreco>
                        <div>
                        <img src={tasklist} alt="" />
                        <h1>Benefícios</h1>
                        </div>
                        <p>1. Brindes exclusivos</p>
                        <p>2. Materiais bônus de web</p>

                        <div>
                        <img src={bill} alt="" />
                        <h1> Preço</h1>
                        </div>
                        <p>R$ 39,99 cobrados mensalmente</p>
                    </BeneficioPreco>

                    <FormCard/>

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
const InfoContainer = styled.div`
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
