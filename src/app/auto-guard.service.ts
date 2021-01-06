import {
    CanActivate,
    ActivatedRouteSnapshot,
    Router
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  
  import { AuthService } from './services/auth.service';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot) {
      return this.authService.isAuthenticated()
        .then(
          (authenticated: boolean) => {
            if (authenticated) {
              return true;
            } else {
              this.router.navigate(['/character']);
            }
          }
        );
    }
  }
  