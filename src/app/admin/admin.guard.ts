import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, tap } from "rxjs";
import { AuthService } from "./auth.service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })

export class AdminGuard {

  private adminEmail: string = environment.adminemail;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(
            map(user => {
                return !!user && user.email == this.adminEmail;
            }),
            tap(isAdmin => {
                if (!isAdmin) {
                    this.router.navigate(['/']);
                }
            })
        )}
}


// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard {
//   private adminEmail: string = "admin@admin.com";
//   constructor(private authService: AuthService, private router: Router) { }
//   canActivate():
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//             return this.authService.user.pipe(
//             map(user => {
//                 return !!user && user.email == this.adminEmail;
//             }),
//             tap(isAdmin => {
//                 if (!isAdmin) {
//                     this.router.navigate(['/']);
//                 }
//             })
//         )}
// }
