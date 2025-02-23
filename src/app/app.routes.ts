import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    title: 'Jhonatan - About',
    loadChildren: () => import('./views/about/about.routes').then(m => m.aboutRoutes),
  },
  {
    path: 'home',
    title: 'Jhonatan - Home',
    loadChildren: () => import('./views/home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'projects',
    title: 'Jhonatan - Projects',
    loadChildren: () => import('./views/projects/projects.routes').then(m => m.projectsRoutes),
  },
  {
    path: 'testimonials',
    title: 'Jhonatan - Testimonials',
    loadChildren: () => import('./views/testimonials/testimonials.routes').then(m => m.testimonialsRoutes),
  },
  {
    path: '**',
    title: 'Jhonatan - 404',
    loadChildren: () => import('./views/not-found/not-found.routes').then(m => m.notFoundRoutes),
  }
];
