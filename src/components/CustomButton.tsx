import { Center, Button } from "@chakra-ui/react"

interface ButtonProps {
    name: string
    event: () => void
}

export const CustomButton = ({ event, name }: ButtonProps) => {
    return (
        <Center>
            <Button onClick={event} colorPalette='teal' size='sm' width='100%' marginTop='5px'>
                {name}
            </Button>
        </Center>
    )
}