import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'imprint', component: ImprintPageComponent },
];
