import {
    Input,
    Box,
    Center,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { CustomButton } from "../components/CustomButton";
import { login } from "../services/login";

export const Card = () => {
    return (
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
            <Header />
            <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" />
                <Input placeholder="password" />
                <CustomButton name="login" event={login} />
            </Box>
        </Box>
    )
}