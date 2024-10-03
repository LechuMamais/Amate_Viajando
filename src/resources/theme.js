import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        primary: '#000000',
        secondary: '#ffffff',
        tertiary: '#000000',
        quaternary: '#000000',
        quinary: '#000000',
        senary: '#000000',
        septenary: '#000000',
        octonary: '#000000',
        nonary: '#000000',
        denary: '#000000',
        undecary: '#000000',
        duodecary: '#000000',
        tredecary: '#000000',
        quattuordecary: '#000000',
        quindecary: '#000000',
    }
};

export const theme = extendTheme({ colors });

// Ejemplo de uso: color={brand.primary}