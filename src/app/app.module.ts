import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpComponent } from './pages/http/http.component';
import { RouterComponent } from './pages/router/router.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { HomeComponent } from './pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { Child1Component } from './pages/communication/child1/child1.component';
import { Child2Component } from './pages/communication/child2/child2.component';
import { Child3Component } from './pages/communication/child3/child3.component';
import { DirectiveComponent } from './pages/directive/directive.component';
import { NgContentComponent } from './pages/ng-content/ng-content.component';
import { FormComponent } from './pages/form/form.component';
import { LifeCycleComponent } from './pages/life-cycle/life-cycle.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { I18nComponent } from './pages/i18n/i18n.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    RouterComponent,
    CommunicationComponent,
    HomeComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    DirectiveComponent,
    NgContentComponent,
    FormComponent,
    LifeCycleComponent,
    RxjsComponent,
    I18nComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
