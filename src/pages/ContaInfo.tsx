import { Badge, Box, Text, Card } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsBank } from "react-icons/bs";
import { AppContext } from "../components/AppContext"
import type { IConta } from "../api"
import { Card as PageCard } from "../components/Card"

const ContaInfo = () => {
    const [userData, setUserData] = useState<null | IConta>();
    const { conta, isLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn && typeof conta === "undefined") {
            navigate('/');
        }
    }, [conta, isLoggedIn, navigate]);

    useEffect(() => {
        const getData = () => {
            setUserData(conta);
        };

        getData();
    }, [conta]);

    return (
        <>
            <PageCard>
                <Text fontSize='3xl' fontWeight='bold' padding='10px 25px' marginBottom='15px'>
                    Informações do usuário
                </Text>
                <Card.Root width="320px" margin='10px 25px' backgroundColor="#e8e1f2">
                    <Card.Body gap="2">
                        <Card.Title mt="2">{userData?.name}</Card.Title>
                        <Card.Description>
                            {userData?.email}
                        </Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Link to={`/conta/${userData?.id}`}>
                            <Badge variant="solid" colorPalette="green" padding="10px">
                                Conta
                                <BsBank />
                            </Badge>
                        </Link>
                    </Card.Footer>
                </Card.Root>
            </PageCard>
        </>
    )
}

export default ContaInfo