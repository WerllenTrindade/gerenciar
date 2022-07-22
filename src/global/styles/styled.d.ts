import 'styled-components';

import theme from './theme'

//acesse o modulo do styled comeponent e sobrecresva
declare module 'styled-components' {
    type ThemeType = typeof theme

    // corrigir o erro no theme."colors".azul
    export interface DefaultTheme extends ThemeType {}
}