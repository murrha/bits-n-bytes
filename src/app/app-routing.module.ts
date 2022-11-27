import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'workshops', component: WorkshopsComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
