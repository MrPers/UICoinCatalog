import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './pages/auth-callback/callback.component';
import { RefreshComponent } from './pages/refresh/refresh.component';
// import { ChartCoinComponent } from './modules/coin/pages/chart-coin/chart.component';

const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'refresh',
    component: RefreshComponent,
  },
  {
    // path: 'call-api',
    // component: CallApiComponent,
    // canActivate: [AuthGuardService]
  },
  
  {
    // path: 'call-api',
    // component: CallApiComponent
  },
];

export const SecurityRouttes = RouterModule.forChild(routes);