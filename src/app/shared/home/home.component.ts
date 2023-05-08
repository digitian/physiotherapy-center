import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(): void {

  }

  motto: string = environment.motto
  phone: string = environment.phone;
  infomail: string = environment.email;
  Logo: string = environment.logo;

}
