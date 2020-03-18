import {Component} from '@angular/core';

interface RouteInterface {
  name: string;
  routerLink: string;
  class: string;
  routerLinkActive: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-records';

  public routes: Array<RouteInterface>;

  public routerLinkActiveOptions: object;

  constructor() {
    this.routerLinkActiveOptions = {
      exact: true
    };

    const common = {
      class: 'list-group-item',
      routerLinkActive: 'active'
    };

    this.routes = [
      {name: '首页', routerLink: '/', ...common},
      {name: '组件通信', routerLink: '/communication', ...common},
      {name: '动画', routerLink: '/animation', ...common},
      {name: '指令', routerLink: '/directive', ...common},
      {name: '表单', routerLink: '/form', ...common},
      {name: '生命周期', routerLink: '/life-cycle', ...common},
      {name: 'shadowDom', routerLink: '/shadow-dom', ...common},
      {name: 'HTTP', routerLink: '/http', ...common},
      {name: 'ngContent', routerLink: '/ng-content', ...common},
      {name: 'module', routerLink: '/module', ...common},
      {name: 'rxjs', routerLink: '/rxjs', ...common},
      {name: 'i18n', routerLink: '/i18n', ...common},
      {name: 'router', routerLink: '/router', ...common},
      {name: 'ssr', routerLink: '/ssr', ...common},
      {name: 'pipe', routerLink: '/pipe', ...common},
    ];
  }

}
