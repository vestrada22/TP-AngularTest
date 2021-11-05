import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RolesGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUserLogin(route);
  }

  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    const { role } = this.authService.userData
    if (role === route.data['role']) {
      return true
    } else {
      if (role === 'admin') {
        Swal.fire('Error', 'You do not have permissions to view this content', 'error')
        this.router.navigate(['main/characters'])
      } else {
        Swal.fire('Error', 'You do not have permissions to view this content', 'error')
        this.router.navigate(['main/movies'])
      }
      return false
    }
  }

}
