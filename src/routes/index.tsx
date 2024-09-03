import { Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Home, Map, PeopleAlt } from '@mui/icons-material';
import { Dashboard, DetalheDePessoas, ListagemDePessoas } from '../pages';

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
      {
        label: 'pessoas',
        path: '/pessoas',
        icon: PeopleAlt,
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
        path='/pessoas'
        element={<ListagemDePessoas />}
      />
      <Route
        path='/pessoas/detalhe/:id'
        element={<DetalheDePessoas />}
      />
      {/* <Route
        path='/cidades'
        element={<ListagemDePessoas />}
      /> */}
    </Routes>
  );
};
