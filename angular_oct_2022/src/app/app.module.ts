import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CenterComponent } from './components/center/center.component';
import { LoginModule } from 'src/login/login.module';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DatabindingChildComponent } from './components/databinding-child/databinding-child.component';
import { DirectivesComponent } from './components/directives/directives.component';

@NgModule({
  // components , directives , pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    CenterComponent,
    DatabindingComponent,
    DatabindingChildComponent,
    DirectivesComponent,
  ],
  // dependent modules
  imports: [BrowserModule, AppRoutingModule, LoginModule, FormsModule],
  // services / injectables
  providers: [],
  bootstrap: [AppComponent], // Which Comp To Load = AppComponent
})
export class AppModule {}
