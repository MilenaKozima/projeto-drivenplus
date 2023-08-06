import { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function FormCard({plano}) {

    const {name, price, id} = plano;

    const [nomeip, setNomeip] = useState("");
    const [cartao, setcartao] = useState("");
    const [codseg, setCodseg] = useState("");
    const [validade, setValidade] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    function card(e) {

        e.preventDefault();

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        }

        const plan = {
            membershipId: id,
            cardName: nomeip,
            cardNumber: cartao,
            securityNumber: codseg,
            expirationDate: validade
        }
        console.log(plan);

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", plan, config);
        promise.then(resp => {
            navigate('/home');
        })
        promise.catch(erro => {
            alert(erro.response.data.message)
        })

    }

    return (
        <FormC onSubmit={card}>
            <input
                id="nomeip"
                type="text"
                placeholder="Nome impresso no cartão"
                required
                onChange={e => setNomeip(e.target.value)}
                value={nomeip}
            />
            <input
                id="cartao"
                type="number"
                placeholder="Digitos do cartão"
                required
                onChange={e => setcartao(e.target.value)}
                value={cartao}
            />
            <BotaoContainer>
                <input
                    type="number"
                    id="codseg"
                    placeholder="Código de segurança"
                    required
                    onChange={e => setCodseg(e.target.value)}
                    value={codseg}
                />
                <input
                    type="number"
                    id="validade"
                    placeholder="Validade"
                    required
                    onChange={e => setValidade(e.target.value)}
                    value={validade}
                />
            </BotaoContainer>
            <button type="button" onClick={openModal}>
                ASSINAR
            </button>


            {/* The Modal */}
            <ModalWrapper isOpen={isModalOpen}>
                <ModalContent>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                    <p>Tem certeza que deseja assinar o plano {name} (R$ {price})</p>
                    <div>
                    <button className="nao">NÃO</button>
                    <button type="submit" className="sim">SIM</button>
                    </div>
                </ModalContent>
            </ModalWrapper>
        </FormC>
    );
}

const FormC = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 34px;
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
    .nao{
        background-color: #CECECE;
        width: 95px;
        height: 52px;
        color: #FFFFFF;
        font-family: 'Roboto';
    }
    .sim{
        background-color: #FF4791;
        width: 95px;
        height: 52px;
        color: #FFFFFF;
        font-family: 'Roboto';
    }
`
const BotaoContainer = styled.div`
    width: 299px;
    display: flex;
    justify-content: space-between;
    input{
        width: 140px;
        height: 52px;
        border-radius: 8px;
        border-style: none;
        background-color: #FFFFFF;
        margin-top: 16px;
        font-family: 'Roboto';
        font-size: 14px;
    }
`

const ModalWrapper = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 300px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color:#FFFFFF;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 12px;
  width: 60%;
  div{
    display: flex;
    justify-content: space-between;
  }
  p{
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: center;
  }
`;

const CloseButton = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;