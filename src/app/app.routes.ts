// app.routes.ts
import { Routes } from '@angular/router';
// import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { shellRoutes } from './shell-routes';

export const routes: Routes = [
  // 1) land on Home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 2) Home page (your landing)
  {
    path: 'home',
    // component: LandingLayoutComponent,
    data: { withPrimeFlex: true },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./main/main.module').then(m => m.MainModule),
      },
    ],
  },

  // 3) Remote feature shells (companies/jobs/jobseeker)
  ...shellRoutes,

  // 4) other pages
  { path: 'login', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'error-404', loadChildren: () => import('./pages/error/error-404/error-404.module').then(m => m.Error404Module) },
  { path: 'error-500', loadChildren: () => import('./pages/error/error-500/error-500.module').then(m => m.Error500Module) },

  // 5) fallback
  { path: '**', redirectTo: 'home' },
];
