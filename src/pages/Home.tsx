import {
    Input,
    Center,
    Heading
} from "@chakra-ui/react";
import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";
import { login } from "../services/login"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { conta, isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn && conta) {
            navigate('/infoconta');
        }
    }, [conta, isLoggedIn, navigate]);

    const validateUser = async (email: string, password: string) => {
        const conta = await login(email, password)
        if (conta == null) return

        setIsLoggedIn(true)
        changeLocalStorage({ login: true, conta: conta })
        navigate(`/infoconta`)
    }

    return (
        <Card>
            <Center>
                <Heading>Faça o login</Heading>
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="password" value={password} type="password" onChange={(event) => setPassword(event.target.value)} />
            <CustomButton name="login" onClick={() => validateUser(email, password)} />
        </Card>
    )
}

export default Home;