import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    title: 'Jhonatan - Sobre',
    loadChildren: () => import('./views/about/about.routes').then(m => m.aboutRoutes),
  },
  {
    path: 'inicio',
    title: 'Jhonatan - Início',
    loadChildren: () => import('./views/home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'projetos',
    title: 'Jhonatan - Projetos',
    loadChildren: () => import('./views/projects/projects.routes').then(m => m.projectsRoutes),
  },
  {
    path: 'testemunhos',
    title: 'Jhonatan - Testemunhos',
    loadChildren: () => import('./views/testimonials/testimonials.routes').then(m => m.testimonialsRoutes),
  },
  {
    path: '**',
    title: 'Jhonatan - 404',
    loadChildren: () => import('./views/not-found/not-found.routes').then(m => m.notFoundRoutes),
  }
];
