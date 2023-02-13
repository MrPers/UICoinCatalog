import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './elements/error/error.component';

const routes: Routes = [
  // { path:  'chart/:id',
  //  component:  ChartCoinComponent
  // },
  // {
  //   path: 'table', 
  //   component: TableCoinComponent,
  // },
  {
    path: '',
    loadChildren: () => import('./modules/coin/coin.module').then((el)=>el.CoinModule),
  },
  { 
    path: '**', 
    component: ErrorComponent 
  },
  
];

export const AppRoutes = RouterModule.forRoot(routes);
