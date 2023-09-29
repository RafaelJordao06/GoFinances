import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { Routes } from "./src/routes";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import theme from "./src/global/styles/theme";

import * as SplashScreen from "expo-splash-screen"; // Importe o SplashScreen

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Evitar fechamento automático da tela de abertura
      } catch (e) {
        console.warn(e);
      }
    }

    prepareApp();
  }, []); // Apenas executar uma vez

  if (!fontsLoaded) {
    return null;
  }

  // Agora você pode ocultar a tela de abertura quando estiver pronto para fazê-lo
  if (fontsLoaded) {
    SplashScreen.hideAsync(); // Ocultar a tela de abertura
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}
