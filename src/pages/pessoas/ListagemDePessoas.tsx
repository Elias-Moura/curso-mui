import { LayoutBase } from '../../shared/Layouts';
import { ListToolBar } from '../../shared/components';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { useDebounce } from '../../shared/hooks';

export const ListagemDePessoas: React.FC = () => {
  const isFirstRender = useRef(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const { debounce } = useDebounce();
  const realizarBusca = useCallback(() => {
    PessoasService.getAll(1, busca).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        console.log(result);
      }
    });
  }, [busca]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      realizarBusca();
    } else {
      debounce(realizarBusca);
    }
  }, [busca, debounce, realizarBusca]);

  return (
    <LayoutBase
      pageTitle='Listagem de pessoas'
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
