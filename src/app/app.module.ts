import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { ContactComponent } from './component/contact/contact.component';
import { ContainerComponent } from './component/container/container.component';
import { ProfileIntroCardComponent } from './component/home/profile-intro-card/profile-intro-card/profile-intro-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PlatformModule } from '@angular/cdk/platform';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ContactComponent,
    ContainerComponent,
    ProfileIntroCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlatformModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
