import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import type { IConta } from '../api'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        changeLocalStorage({ login: false, conta: {} as IConta })
        navigate('/')
    }

    return (
        <Flex backgroundColor='aquamarine' padding='10px 20px' borderRadius='0 0 12px 12px'>
            <Box>
                <Heading>
                    Dio Bank
                </Heading>
            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}>Sair</Button>
                    </>
                )
            }
        </Flex>
    )
}