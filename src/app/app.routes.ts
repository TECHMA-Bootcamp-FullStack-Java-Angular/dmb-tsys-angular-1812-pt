import { Routes } from '@angular/router';
import { MoviesComponent } from './component/movies/movies.component';
import { SeriesComponent } from './component/series/series.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent},
  { path: 'movies', component: MoviesComponent }
];
