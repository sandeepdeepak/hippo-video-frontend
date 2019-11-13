import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { LovedBusinessComponent } from './loved-business/loved-business.component';
import { ReferAndBenefitComponent } from './refer-and-benefit/refer-and-benefit.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { MagicPresentationComponent } from './magic-presentation/magic-presentation.component';
import { EngageLeadsComponent } from './engage-leads/engage-leads.component';
import { VideoEmailsComponent } from './video-emails/video-emails.component';
import { ActOnItComponent } from './act-on-it/act-on-it.component';
import { RightsReservedComponent } from './rights-reserved/rights-reserved.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailCampaignComponent,
    LovedBusinessComponent,
    ReferAndBenefitComponent,
    GettingStartedComponent,
    MagicPresentationComponent,
    EngageLeadsComponent,
    VideoEmailsComponent,
    ActOnItComponent,
    RightsReservedComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
