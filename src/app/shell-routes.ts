// shell-routes.ts
import { Route } from '@angular/router';
import { companiesRoutes } from './remote-routes/companies-routes';
// (add jobsRoutes/jobseekerRoutes when ready)

export const shellRoutes: Route[] = [
  { path: 'companies', children: companiesRoutes },
  // { path: 'jobs', children: jobsRoutes },
  // { path: 'jobseeker', children: jobseekerRoutes },
];
