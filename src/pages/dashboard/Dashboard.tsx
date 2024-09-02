import { LayoutBase } from '../../shared/Layouts';
import { DetailToolBar } from '../../shared/components';

export const Dashboard = () => {
  return (
    <LayoutBase
      pageTitle="Página inicial"
      barraDeFerramentas={<DetailToolBar mostrarBotaoSalvarEFechar/>}
    >
      BATATA
    </LayoutBase>
  );
};
