import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CommunicationComponent} from './pages/communication/communication.component';
import {AnimationComponent} from './pages/animation/animation.component';
import {DirectiveComponent} from './pages/directive/directive.component';
import {FormComponent} from './pages/form/form.component';
import {LifeCycleComponent} from './pages/life-cycle/life-cycle.component';
import {ShadowDomComponent} from './pages/shadow-dom/shadow-dom.component';
import {HttpComponent} from './pages/http/http.component';
import {NgContentComponent} from './pages/ng-content/ng-content.component';
import {RouterComponent} from './pages/router/router.component';
import {ModuleComponent} from './pages/module/module.component';
import {RxjsComponent} from './pages/rxjs/rxjs.component';
import {I18nComponent} from './pages/i18n/i18n.component';
import {SsrComponent} from './pages/ssr/ssr.component';
import {PipeComponent} from './pages/pipe/pipe.component';
import {TsPointsComponent} from './pages/ts-points/ts-points.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'communication',
    component: CommunicationComponent,
    pathMatch: 'full'
  },
  {
    path: 'animation',
    component: AnimationComponent,
    pathMatch: 'full'
  },
  {
    path: 'directive',
    component: DirectiveComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent,
    pathMatch: 'full'
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent,
    pathMatch: 'full'
  },
  {
    path: 'shadow-dom',
    component: ShadowDomComponent,
    pathMatch: 'full'
  },
  {
    path: 'http',
    component: HttpComponent,
    pathMatch: 'full'
  },
  {
    path: 'ng-content',
    component: NgContentComponent,
    pathMatch: 'full'
  },
  {
    path: 'router',
    component: RouterComponent,
    pathMatch: 'full'
  },
  {
    path: 'module',
    component: ModuleComponent,
    pathMatch: 'full'
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
    pathMatch: 'full'
  },
  {
    path: 'i18n',
    component: I18nComponent,
    pathMatch: 'full'
  },
  {
    path: 'ssr',
    component: SsrComponent,
    pathMatch: 'full'
  },
  {
    path: 'pipe',
    component: PipeComponent,
    pathMatch: 'full'
  },
  {
    path: 'ts-point',
    component: TsPointsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
