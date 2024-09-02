import { Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Home, Map } from '@mui/icons-material';
import { Dashboard, ListagemDeCidade } from '../pages';

export const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    // Função utilizada para executar uma tarefa apenas uma vez idenpendente de novos fluxos de render.
    setDrawerOptions([
      {
        label: 'Página Inicial',
        path: '/home',
        icon: Home,
      },
      {
        label: 'cidades',
        path: '/cidades',
        icon: Map,
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path='/home'
        element={<Dashboard />}
      />
      <Route
        path='/cidades'
        element={<ListagemDeCidade />}
      />
    </Routes>
  );
};
