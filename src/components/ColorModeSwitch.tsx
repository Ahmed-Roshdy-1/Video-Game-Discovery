import { HStack, Icon, useColorMode } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <Icon as={colorMode === "dark" ? FaMoon : FaSun} boxSize="20px" onClick={toggleColorMode} cursor="pointer" color={colorMode === "dark" ? "gray.500" : "yellow.400"} />
        </HStack>
    )
}

export default ColorModeSwitch