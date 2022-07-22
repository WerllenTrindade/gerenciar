import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { NavigationContainer } from '@react-navigation/native'
import {AppRouter} from './src/routes/app.routes'
import { Register } from './src/screens/Register';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  //Enquanto as fontes não forem carregadas, fique na tela de loading
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </ThemeProvider>
    )
}

