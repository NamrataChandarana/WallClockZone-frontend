import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { CookiesProvider } from 'react-cookie';
import { ColorModeScript } from '@chakra-ui/react'
// import theme from './theme'
import './App.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <App />
      </CookiesProvider>
    </ChakraProvider>
  </ReduxProvider>
  // </React.StrictMode>
);
