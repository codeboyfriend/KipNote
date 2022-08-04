import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    sm: '320px',
    md: '425px',
    lg: '768px',
    xl: '1024px'
}

const theme = extendTheme({ breakpoints });

export default theme;