import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { HttpComponent } from './pages/http/http.component';
import { RouterComponent } from './pages/router/router.component';
import { CommunicationComponent } from './pages/communication/communication.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'http',
    component: HttpComponent
  },
  {
    path: 'router',
    component: RouterComponent
  },
  {
    path: 'communication',
    component: CommunicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
