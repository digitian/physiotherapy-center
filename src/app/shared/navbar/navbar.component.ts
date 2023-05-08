import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin: boolean = false;
  navLogo: string = environment.logo;
  facebook: string = environment.facebook;
  twitter: string = environment.twitter;
  youtube: string = environment.youtube;
  whatsapp: string = environment.whatsapp;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { };

  ngOnInit():void {
    this.authService.user.subscribe(user => {
      this.isAdmin = user?.email == environment.adminemail;
    })
  }

  activePageControl(element: any) {
    const allQueries = document.querySelectorAll(".navbar-nav .nav-item .nav-main")
    for (let k in allQueries) {
      if (allQueries[k].classList && allQueries[k].classList.contains("active")) {
        allQueries[k].classList.remove("active");
      };
    };
    element.classList.add("active");
  };
}
