import "react-native-gesture-handler";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from "react";
import { AppRoutes } from "./src/routes/app.routes";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "react-native";
import { SignIn } from "./src/screens/SignIn";

import { AuthProvider } from './src/hooks/auth';

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle={'light-content'} />

        <AuthProvider>
          <SignIn />
        </AuthProvider>

      </NavigationContainer>
    </ThemeProvider>
  );
}
