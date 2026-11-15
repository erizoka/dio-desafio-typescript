import { Header } from "./Header"
import { Box, Spacer } from "@chakra-ui/react"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='0 5px'>
                <Header />
                <Spacer height='2vh' />
                {children}
            </Box>
        </>
    )
}
