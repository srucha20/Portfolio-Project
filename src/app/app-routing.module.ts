import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { HomeComponent } from './component/home/home.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ProfessionalComponent } from './component/professional/professional.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'professional', component: ProfessionalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
