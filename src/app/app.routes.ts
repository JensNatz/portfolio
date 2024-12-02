import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'imprint', component: ImprintPageComponent },
    { path: 'privacy', component: PrivacyPageComponent },
];
