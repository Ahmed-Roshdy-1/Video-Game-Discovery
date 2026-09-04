import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config : ThemeConfig = {
    initialColorMode : "dark",
}

const theme = extendTheme({
    config,
   colors: {
    gray: {
        50: "#f9f9f9",
        100: "#e0e0e0",
        200: "#c0c0c0",
        300: "#a0a0a0",
        400: "#808080",
        500: "#606060",
        600: "#404040",
        700: "#202020",
        800: "#101010",
        900: "#000000",
    }
   }
})

export default theme