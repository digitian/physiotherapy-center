import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor() { }

  address: string = environment.address;
  phone: string = environment.phone;
  faks: string = environment.faks;
  email: string = environment.email;

}
