import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent, AboutComponent, SkillsComponent, ExperiencesComponent, PortfolioComponent } from './sections';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperiencesComponent,
    PortfolioComponent,
    FooterComponent,
    CardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
