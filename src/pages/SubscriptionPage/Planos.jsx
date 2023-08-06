import { styled } from 'styled-components';

export default function Planos({plano}){

    const {image, price} = plano;

    return(
        <ButtonSty>
            <img src={image} alt="" />
            <p>R$ {price}</p>
        </ButtonSty>
    );
}

const ButtonSty = styled.button`
    background-color: #0E0E13;
    width: 290px;
    height: 180px;
    margin-top: 10px;
    border-radius: 12px;
    border-color: #7E7E7E;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 139px;
        height: 95px;
    }
    p{
        color: #FFFFFF;
        font-family: 'Roboto';
        font-size: 24px;
    }
`