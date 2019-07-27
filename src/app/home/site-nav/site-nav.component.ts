import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.component.html'
})
export class SiteNavComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  isHomeRoute() {
    return this.router.url === '/' || this.router.url === '/home';
  }

  isActiveRoute(routePath) {
    return this.router.url === routePath;
  }
}
