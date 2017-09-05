import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ProjectsComponent } from './project/projects.component';
import { ProjectDetailComponent } from './project/project-detail.component';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'projects/detail/:id', component: ProjectDetailComponent},
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
