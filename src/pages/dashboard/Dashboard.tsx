import { LayoutBase } from '../../shared/Layouts';
import { ListToolBar } from '../../shared/components';

export const Dashboard = () => {
  return (
    <LayoutBase
      pageTitle="Página inicial"
      barraDeFerramentas={<ListToolBar mostrarInputBusca />}
    >
      BATATA
    </LayoutBase>
  );
};
