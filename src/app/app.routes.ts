import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent, title:'home'},
    {path:'about',component:AboutComponent, title:'about'},
    {path:'portfolio',component:PortfolioComponent, title:'portfolio'},
    {path:'contact',component:ContactComponent, title:'contact'},
];
