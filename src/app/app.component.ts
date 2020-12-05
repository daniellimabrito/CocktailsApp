import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cocktails App';
  timeout;
  routerChanged = true;

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator
        this.routerChanged = true;
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.timeout = setTimeout(() => {
          clearTimeout(this.timeout);
          this.routerChanged = false;
        }, 1000);
      }
    });
  }
}
