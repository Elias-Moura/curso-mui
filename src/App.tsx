import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { MenuLateral } from './shared/components/menu-lateral/MenuLateral';
import {
  DrawerProvider,
  AppThemeProvider,
  AuthProvider,
} from './shared/contexts';

import './shared/forms/TraducoesYup';
import { Login } from './shared/components';

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <Login>
          <DrawerProvider>
            <BrowserRouter>
              <MenuLateral>
                <AppRoutes />
              </MenuLateral>
            </BrowserRouter>
          </DrawerProvider>
        </Login>
      </AppThemeProvider>
    </AuthProvider>
  );
};
