import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import type { IConta } from "../api";
import { AppContext } from "../components/AppContext";

const Conta = () => {
    const [userData, setUserData] = useState<null | IConta>()
    const { conta, isLoggedIn } = useContext(AppContext)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn && typeof conta === "undefined") {
            navigate('/');
        }
    }, [conta, isLoggedIn, navigate]);

    useEffect(() => {
        const getData = async () => {
            setUserData(conta);
        };

        getData();
    }, [conta]);

    const actualData = new Date()

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} paddingTop={16} gap={8}>
                {
                    userData === undefined || userData === null
                        ? (
                            <Center>
                                <Spinner size="xl" color="white" />
                            </Center>
                        )
                        : (
                            <>
                                <CardInfo
                                    mainContent={`Bem vinda ${userData?.name}`}
                                    content={`${actualData.toLocaleDateString("pt-BR")} ${actualData.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`}
                                />
                                <CardInfo
                                    mainContent="Saldo"
                                    content={`R$ ${userData.balance.toFixed(2)}`}
                                />
                            </>
                        )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta