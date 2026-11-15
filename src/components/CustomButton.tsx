import { Center, Button } from "@chakra-ui/react"
import type { MouseEventHandler } from "react"

interface ButtonProps {
    name: string
    onClick: MouseEventHandler
}

export const CustomButton = ({ onClick, name }: ButtonProps) => {
    return (
        <Center>
            <Button onClick={onClick} colorPalette='teal' size='sm' width='100%' marginTop='5px'>
                {name}
            </Button>
        </Center>
    )
}