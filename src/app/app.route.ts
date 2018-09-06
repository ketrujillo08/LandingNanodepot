import {Routes,RouterModule} from '@angular/router';
import { Page500Component } from './page500/page500.component';

const routes:Routes = [
    {path:'**',component:Page500Component}
]

export const APP_ROUTES = RouterModule.forRoot(routes,{useHash:true});