import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './resources/theme.js';
import { AllDestinationsProvider } from './providers/AllDestinationsProvider.jsx';
import { UserProvider } from './providers/UserProvider.jsx';
import { LanguageProvider } from './providers/LanguageProvider.jsx';
import '../i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageProvider>
      <ChakraProvider theme={theme}>
        <AllDestinationsProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </AllDestinationsProvider>
      </ChakraProvider>
    </LanguageProvider>
  </BrowserRouter>,
);
