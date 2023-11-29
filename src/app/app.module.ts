import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ProfessionalComponent } from './component/professional/professional.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContainerComponent } from './component/container/container.component';
import { ProfileIntroCardComponent } from './component/home/profile-intro-card/profile-intro-card/profile-intro-card.component';
import { ProfessionalCardComponent } from './component/professional/professional-card/professional-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {PlatformModule} from '@angular/cdk/platform';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessionalComponent,
    ExperienceComponent,
    PortfolioComponent,
    ContactComponent,
    ContainerComponent,
    ProfileIntroCardComponent,
    ProfessionalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlatformModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
