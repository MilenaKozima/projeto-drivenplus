import { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function FormCard() {

    const [nomeip, setNomeip] = useState("");
    const [cartao, setcartao] = useState("");
    const [codseg, setCodseg] = useState("");
    const [validade, setValidade] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    function openModal() {
        setIsModalOpen(true);
      }
    
      function closeModal() {
        setIsModalOpen(false);
      }

    function card(e) {

        // e.preventDefault();
        // const user = {
        //     email: email,
        //     password: password
        // }

        // const promise = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", user);
        // promise.then(resp => {
        //     if (resp.data.membership === null) {
        //         navigate('/subscriptions')
        //         console.log(resp.data);
        //         const { id, name, image, token } = resp.data;
        //         setUser({ id, name, image, token });
        //     } else {
        //         navigate('/subscriptions/ID_DO_PLANO')
        //     }
        // })
        // promise.catch(erro => {
        //     alert(erro.response.data.message)
        // })

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
            <button onClick={openModal}>
                ASSINAR
            </button>


            {/* The Modal */}
            <ModalWrapper isOpen={isModalOpen}>
                <ModalContent>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                    <p>Some text in the Modal..</p>
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
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
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