import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from '../auth-response.model';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string = "";
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit():void {
    if (localStorage.getItem("user") != null) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const loadedUser = new User(user.email, user.id, user._token, new Date(user._tokenExpirationDate));
    if (loadedUser.token) {
      this.router.navigate(['/admin']);

      };
    };

  }

  handleAuth(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    let authResponse: Observable<AuthResponse>
    this.loading = true

    authResponse = this.authService.login(email, password);

    authResponse.subscribe({

      next: () => {
        this.error = "";
        this.loading = false;
        this.router.navigate(['/admin']);
      },

      error: (err) => {
        this.loading = false;
        this.error = err;

      }

    })

  }

}
