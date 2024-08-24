import { Routes } from '@angular/router';
import { MenuComponent } from './reuseable/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: '', component: MenuComponent},
    {path: '', component: HomeComponent},
];
