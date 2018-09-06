import {Routes,RouterModule, Router} from '@angular/router'
import { PagesComponent } from './pages.component';
import { LandingAComponent } from './landing-a/landing-a.component';
const routes:Routes = [
    {path:'',component:PagesComponent,children:[
        {path:'usa',component:LandingAComponent},
        {path:'',redirectTo:'/usa',pathMatch:'full'},
    ]}
]

export const Pages_Routes = RouterModule.forChild(routes);