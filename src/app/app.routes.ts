import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { REMOTE_ENTRY } from '../remotes';
import { mfQuery } from '../mf-url';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'companies' },

  {
    path: 'companies',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: REMOTE_ENTRY.companies + mfQuery('1.0.0'),
        exposedModule: './Routes',                 // must match the remote's exposes key
      }).then(m => m.remoteRoutes)
       .catch(async err => {
         console.error(err);
         const { RemoteErrorModule } = await import('./error-remote.module');
         return RemoteErrorModule;
       }),
  },
  
  {
    path: 'jobs',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: REMOTE_ENTRY.jobs + mfQuery('1.0.0'),
        exposedModule: './Routes',
      }).then(m => m.remoteRoutes),
  },

  {
    path: 'jobseeker',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: REMOTE_ENTRY.jobseeker + mfQuery('1.0.0'),
        exposedModule: './Routes',
      }).then(m => m.remoteRoutes),
  },

  { path: '**', redirectTo: 'companies' },
];
