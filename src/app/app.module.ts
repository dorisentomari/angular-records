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
import { ShadowDomComponent } from './pages/shadow-dom/shadow-dom.component';
import { EmulateModeComponent } from './pages/shadow-dom/emulate-mode/emulate-mode.component';
import { ShadowDomModeComponent } from './pages/shadow-dom/shadow-dom-mode/shadow-dom-mode.component';
import { NoneModeComponent } from './pages/shadow-dom/none-mode/none-mode.component';
import { NgContent1Component } from './pages/ng-content/ng-content1/ng-content1.component';
import { NgContent2Component } from './pages/ng-content/ng-content2/ng-content2.component';
import { NgContent3Component } from './pages/ng-content/ng-content3/ng-content3.component';
import { FontColorDirective } from './directives/font-color.directive';

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
    I18nComponent,
    ShadowDomComponent,
    EmulateModeComponent,
    ShadowDomModeComponent,
    NoneModeComponent,
    NgContent1Component,
    NgContent2Component,
    NgContent3Component,
    FontColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
