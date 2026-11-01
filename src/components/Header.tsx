import { Box, Center, Heading } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Center>
            <Box backgroundColor='aquamarine' width='fit-content' padding='10px 20px' marginBottom='15px' borderRadius='12px'>
                <Heading>
                    Dio Bank
                </Heading>
            </Box>
        </Center>
    )
}