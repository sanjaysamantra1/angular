import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { ProductsComponent } from './components/products/products.component';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { CountDirective } from './directives/count.directive';
import { ModalComponent } from './components/modal/modal.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom_pipes/remaining.pipe';
import { OrdinalPipe } from './custom_pipes/ordinal.pipe';
import { MySortPipe } from './custom_pipes/my-sort.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { UsersComponent } from './components/users/users.component';
import { UsersService } from './services/users.service';
import { Emp1Component } from './components/emp1/emp1.component';
import { Emp2Component } from './components/emp2/emp2.component';
import { Emp3Component } from './components/emp3/emp3.component';

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
    ProductsComponent,
    NumberonlyDirective,
    HighlightDirective,
    CountDirective,
    ModalComponent,
    PipesComponent,
    RemainingPipe,
    OrdinalPipe,
    MySortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    UsersComponent,
    Emp1Component,
    Emp2Component,
    Emp3Component,
  ],
  // dependent modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  // services / injectables
  providers: [UsersService],
  bootstrap: [AppComponent], // Which Comp To Load = AppComponent
})
export class AppModule {}
