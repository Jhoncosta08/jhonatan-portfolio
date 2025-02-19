import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    title: 'About',
    loadChildren: () => import('./views/about/about.routes').then(m => m.aboutRoutes),
  },
  {
    path: 'contact',
    title: 'Contact',
    loadChildren: () => import('./views/contact/contact.routes').then(m => m.contactRoutes),
  },
  {
    path: 'home',
    title: 'Home',
    loadChildren: () => import('./views/home/home.routes').then(m => m.homeRoutes),
  },
  {
    path: 'projects',
    title: 'Projects',
    loadChildren: () => import('./views/projects/projects.routes').then(m => m.projectsRoutes),
  },
  {
    path: 'testimonials',
    title: 'Testimonials',
    loadChildren: () => import('./views/testimonials/testimonials.routes').then(m => m.testimonialsRoutes),
  },
  {
    path: '**',
    title: '404',
    loadChildren: () => import('./views/not-found/not-found.routes').then(m => m.notFoundRoutes),
  }
];
