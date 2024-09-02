import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Home } from '@mui/icons-material';
import { Dashboard } from '../pages';


export const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    // Função utilizada para executar uma tarefa apenas uma vez idenpendente de novos fluxos de render.
    setDrawerOptions([
      {
        label: 'Página Inicial',
        path: '/home',
        icon: Home,
      },
      {
        label: 'Sobre',
        path: '/sobre',
        icon: Home,
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/home"
        element={<Dashboard />}
      />
      <Route
        path="*"
        element={<Navigate to="/home" />}
      />
    </Routes>
  );
};
