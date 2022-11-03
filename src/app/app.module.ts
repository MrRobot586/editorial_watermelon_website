import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MastheadComponent } from './components/layout/masthead/masthead.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { PortfolioComponent } from './components/sections/portfolio/portfolio.component';
import { AboutComponent } from './components/sections/about/about.component';
import { TeamComponent } from './components/sections/team/team.component';
import { PortfolioItemComponent } from './components/sections/portfolio/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
