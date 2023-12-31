// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const hashToken = !!localStorage.getItem('token');

    if (state.url === '/launch' && !hashToken) {
      this.router.navigate(['/auth']);
      return false;
    }
    if (state.url.includes('/edit/') && !hashToken) {
      this.router.navigate(['/auth']);
      return false;
    }

    return true;
  }
}
