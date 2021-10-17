import "react-native-gesture-handler";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from "react";
import { AppRoutes } from "./src/routes/app.routes";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";

import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "react-native";
import { SignIn } from "./src/screens/SignIn";

import { AuthProvider, useAuth } from './src/hooks/auth';

export default function App() {
  const [fonstLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStorageLoading } = useAuth();

  if (!fonstLoaded || userStorageLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>

      <StatusBar barStyle={'light-content'} />

      <AuthProvider>
        <Routes />
      </AuthProvider>

    </ThemeProvider>
  );
}
