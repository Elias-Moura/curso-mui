import { Box } from '@mui/material';
import { LayoutBase } from '../../shared/Layouts';
import { ListToolBar } from '../../shared/components';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const ListagemDeCidade: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBase
      pageTitle='Listagem de cidades'
      barraDeFerramentas={
        <ListToolBar
          textoBotaoNovo='Nova'
          mostrarInputBusca
          textoDaBusca={busca}
          aoMudarTextoDeBusca={(texto) =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    >
      TESTE
    </LayoutBase>
  );
};
