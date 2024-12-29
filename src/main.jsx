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
import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <BrowserRouter>
      <AllDestinationsProvider>
        <Suspense fallback={<div></div>}>
          <UserProvider>
            <ChakraProvider theme={theme}>
              <App />
            </ChakraProvider>
          </UserProvider>
        </Suspense>
      </AllDestinationsProvider>
    </BrowserRouter>
  </LanguageProvider>,
);
