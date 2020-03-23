import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpParamsInterceptor } from './pages/http/http-params.interceptor';
import { HttpResponseInterceptor } from './pages/http/http-response.interceptor';

import { HttpComponent } from './pages/http/http.component';
import { RouterComponent } from './pages/router/router.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { HomeComponent } from './pages/home/home.component';
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
import { AnimationComponent } from './pages/animation/animation.component';
import { ModuleComponent } from './pages/module/module.component';
import { SsrComponent } from './pages/ssr/ssr.component';

import { FontColorDirective } from './directives/font-color.directive';
import { ReactiveFormComponent } from './pages/form/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './pages/form/template-driven-form/template-driven-form.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { EmojiPipe } from './pipes/emoji.pipe';
import { TsPointsComponent } from './pages/ts-points/ts-points.component';
import { DirtyCheckComponent } from './pages/dirty-check/dirty-check.component';
import { Child4Component } from './pages/communication/child4/child4.component';
import { LifeCycleChild1Component } from './pages/life-cycle/life-cycle-child1/life-cycle-child1.component';
import { LifeCycleChild2Component } from './pages/life-cycle/life-cycle-child2/life-cycle-child2.component';
import { LifeCycleChild3Component } from './pages/life-cycle/life-cycle-child3/life-cycle-child3.component';



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
    FontColorDirective,
    AnimationComponent,
    ModuleComponent,
    SsrComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    PipeComponent,
    EmojiPipe,
    TsPointsComponent,
    DirtyCheckComponent,
    Child4Component,
    LifeCycleChild1Component,
    LifeCycleChild2Component,
    LifeCycleChild3Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpParamsInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
