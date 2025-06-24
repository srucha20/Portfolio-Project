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
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './component/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
    ContactComponent,
    ContainerComponent,
    ProfileIntroCardComponent,
    FooterComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlatformModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
