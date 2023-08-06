import { styled } from "styled-components";
import Planos from "./Planos";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function SubscriptionPage() {

    const [planos, setPlanos] = useState([]);
    const { user } = useContext(UserContext);

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    }

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)

        promise.then(resp => {
            console.log(resp.data);
            setPlanos(resp.data)
        });
        promise.catch(erro => console.log(erro.response.data))
    }, [])

    return (
        <SubsContainer>
            <p>Escolha seu plano</p>
            <PlanosContainer>
                {planos.map(p => (
                    <Link to={`/subscriptions/${p.id}`} key={p.id}>
                        <Planos plano={p} />
                    </Link>
                ))}
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