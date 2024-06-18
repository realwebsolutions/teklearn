import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProgramsComponent } from './programs/programs.component';
import { WorkshopComponent } from './programs/workshop/workshop.component';
import { FirstworkComponent } from './programs/workshop/firstwork/firstwork.component';

export const routes: Routes = [
    {
        path:'', redirectTo: 'home', pathMatch:"full"
       },
       
       { path: 'home', component: HomeComponent},
       { path: 'contact', component: ContactComponent},
       { path: 'aboutus', component: AboutusComponent},
       { path: 'programs', component: ProgramsComponent},
       { path: 'workshop', component: WorkshopComponent},
       { path: 'firstworkshop', component: FirstworkComponent},





];
