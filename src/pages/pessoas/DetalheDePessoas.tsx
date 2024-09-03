import { useNavigate, useParams } from 'react-router-dom';
import { LayoutBase } from '../../shared/Layouts';
import { DetailToolBar } from '../../shared/components';

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log('salvo');
  };

  const handleDelete = () => {
    console.log('deletado');
  };

  return (
    <LayoutBase
      pageTitle='Detalhe de pessoa'
      barraDeFerramentas={
        <DetailToolBar
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEVoltar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          aoClicarEmSalvar={handleSave}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmApagar={handleDelete}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoClicarEmVoltar={() => navigate('/pessoas')}
        />
      }
    >
      <p> Detalhes {id}</p>
    </LayoutBase>
  );
};
