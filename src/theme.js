import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

const breakpoints = {
    sm: '320px',
    md: '425px',
    lg: '768px',
    xl: '1024px'
}

const theme = extendTheme({ config, breakpoints });

export default theme;