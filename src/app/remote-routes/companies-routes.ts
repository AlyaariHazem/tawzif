import { loadRemoteModule } from '@angular-architects/module-federation';
import { Route } from '@angular/router';
import { RemoteApps, getRemoteUrl } from 'src/environments/env-remotes-resolver';
// If you don't have the 'src/*' alias, use: '../../environments/env-remotes-resolver'

const companiesRemoteEntry = getRemoteUrl(RemoteApps.companies);
console.log('companiesRemoteEntry:', companiesRemoteEntry);

export const companiesRoutes: Route[] = [
  { path: '', redirectTo: 'modules', pathMatch: 'full' },

  {
    path: 'modules',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: companiesRemoteEntry,
        exposedModule: './HomeModule',
      }).then(m => m.HomeModule),
  },

  {
    path: 'leaveRequest',
    data: { breadcrumb: 'Leave Request' },
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: companiesRemoteEntry,
        exposedModule: './LeaveRequestModule',
      }).then(m => m.LeaveRequestModule),
  },
];
