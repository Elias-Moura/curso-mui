import { LayoutBase } from '../../shared/Layouts';
import { ListToolBar } from '../../shared/components';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  IListagemPessoa,
  PessoasService,
} from '../../shared/services/api/pessoas/PessoasService';
import { useDebounce } from '../../shared/hooks';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const ListagemDePessoas: React.FC = () => {
  const isFirstRender = useRef(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const { debounce } = useDebounce();
  const realizarBusca = useCallback(() => {
    PessoasService.getAll(1, busca).then((result) => {
      setIsLoading(false);
      if (result instanceof Error) {
        alert(result.message);
      } else {
        console.log(result);
        setRows(result.data);
        setTotalCount(result.totalCount);
      }
    });
  }, [busca]);

  useEffect(() => {
    setIsLoading(true);

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
      <TableContainer
        component={Paper}
        variant='outlined'
        sx={{ m: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Nome completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>Ações</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBase>
  );
};
