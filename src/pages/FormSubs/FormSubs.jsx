import { styled } from "styled-components";
import logoBranca from '../../assets/logo-plano-branco.png'
import tasklist from '../../assets/fluent_clipboard-task-list-rtl-20-regular.png';
import arrow from '../../assets/fa-solid_arrow-left.png';

export default function FormSubs(){
    return(
        <Teste>
        <img className="arrow-img" src={arrow} alt="" />
        <FormSubsContainer>
        <LogoContainer>
            <img src={logoBranca} alt="" />
            <p>Driven Plus</p>
        </LogoContainer>
        <InfoContainer>

                <div>
                    <img src={tasklist} alt="" />
                    <h1>Benefícios</h1>
                </div>

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
    div{
        display: flex;
        align-items: center;
        margin-left: 40px;
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
