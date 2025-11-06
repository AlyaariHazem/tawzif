// import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// import { Component } from "@angular/core";
// import { environment } from 'src/environments/environment';
// import { filter, startWith } from 'rxjs';

// @Component({
//   selector: "app-landing-layout",
//   standalone: false,
//   templateUrl: "./landing-layout.component.html",
//   styleUrls: ["./landing-layout.component.scss"],
// })
// export class LandingLayoutComponent  {
//   styles = [
//     "assets/scss/primeflex.css",
//     "assets/helpdesk/layout.css",
//     "assets/helpdesk/prime-theme.css",
//     "assets/helpdesk/styles.css",
//   ];
//   showNav = false;
//   logoPath = environment.logoPath;
//   // ngOnInit() {
//   //   this.showNav = this.route.snapshot.firstChild?.data['showNav'] ?? false;
//   //   this.route.firstChild?.data.subscribe(data => {

//   //     this.showNav = data['showNav'] ?? false;
//   //   });
//   // }
//   constructor(public router: Router, private route: ActivatedRoute) {
//     this.loadStyles();
//     this.setupRouteDataListener();

//     // Get initial value


//     // Subscribe to changes

//   }
//   private setupRouteDataListener() {
//     // Initial value
//     this.updateShowNavState();

//     // Subscribe to future changes
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd),
//       startWith(null) // Trigger immediately
//     ).subscribe(() => {
//       this.updateShowNavState();
//     });
//   }

//   private updateShowNavState() {
//     // Get the deepest child route that has data
//     let child = this.route.snapshot;
//     while (child.firstChild) {
//       child = child.firstChild;
//     }
//     this.showNav = child.data['showNav'] ?? false;
//   }
//   loadStyles() {
//     const head = document.getElementsByTagName("head")[0];
//     this.styles.forEach((style) => {
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.type = "text/css";
//       link.href = style;
//       head.appendChild(link);
//     });
//   }

//   ngOnDestroy() {
//     const head = document.getElementsByTagName("head")[0];
//     this.styles.forEach((style) => {
//       const link = document.querySelector(`link[href="${style}"]`);
//       if (link) {
//         head.removeChild(link);
//       }
//     });
//   }
// }
