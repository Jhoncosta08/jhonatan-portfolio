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
    loadComponent: () => import('./views/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'home',
    title: 'Jhonatan - Home',
    loadComponent: () => import('./views/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'projects',
    title: 'Jhonatan - Projects',
    loadComponent: () => import('./views/projects/projects.component').then(m => m.ProjectsComponent),
  },
  {
    path: 'testimonials',
    title: 'Jhonatan - Testimonials',
    loadComponent: () => import('./views/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
