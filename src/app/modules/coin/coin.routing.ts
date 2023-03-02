import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth';
import { ChartCoinComponent } from './pages/chart-coin/chart.component';
import { TableCoinComponent } from './pages/table-coin/table.component';
// import { ChartCoinComponent } from './modules/coin/pages/chart-coin/chart.component';

const routes: Routes = [
  { path:  'chart/:id',
   component:  ChartCoinComponent,
   canActivate: [AuthService]
  },
  {
    path: 'table', 
    component: TableCoinComponent,
  },
  { 
    path: '',
    component: TableCoinComponent,
  },
];

export const CoinRouttes = RouterModule.forChild(routes);