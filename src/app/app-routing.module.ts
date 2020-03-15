import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {CommunicationComponent} from './pages/communication/communication.component';
import {DirectiveComponent} from './pages/directive/directive.component';
import {FormComponent} from './pages/form/form.component';
import {LifeCycleComponent} from './pages/life-cycle/life-cycle.component';
import { ShadowDomComponent } from './pages/shadow-dom/shadow-dom.component';
import {HttpComponent} from './pages/http/http.component';
import {NgContentComponent} from './pages/ng-content/ng-content.component';
import {RouterComponent} from './pages/router/router.component';
import {RxjsComponent} from './pages/rxjs/rxjs.component';
import {I18nComponent} from './pages/i18n/i18n.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'communication',
    component: CommunicationComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'life-cycle',
    component: LifeCycleComponent
  },
  {
    path: 'shadow-dom',
    component: ShadowDomComponent
  },
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: 'ng-content',
    component: NgContentComponent
  },
  {
    path: 'router',
    component: RouterComponent
  },
  {
    path: 'rxjs',
    component: RxjsComponent
  },
  {
    path: 'i18n',
    component: I18nComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
