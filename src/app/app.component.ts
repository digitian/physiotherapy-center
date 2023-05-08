import { Component } from '@angular/core';
import { AuthService } from './admin/auth.service';
import { ContentService } from './shared/content.service';
import { FizyoconContent } from './shared/content.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public Loadable: boolean = false;

  constructor(
    private authService: AuthService,
    private contentService: ContentService
    ) { }

  applyDataBaseContent(data: FizyoconContent) {
    environment.motto = data.intro_text;
    environment.logo = data.intro_logo;
    environment.about_introduction = data.about_introduction;
    environment.about_link = data.about_link;
    environment.about_1stdoc_name = data.about_1stdoc_name;
    environment.about_1stdoc_info = data.about_1stdoc_info;
    environment.about_2nddoc_name = data.about_2nddoc_name;
    environment.about_2nddoc_info = data.about_2nddoc_info;
    environment.about_story = data.about_story;
    environment.phone = data.phone;
    environment.email = data.email;
    environment.facebook = data.facebook;
    environment.twitter = data.twitter;
    environment.youtube = data.youtube;
    environment.whatsapp = data.whatsapp;
  }

  ngOnInit(): void {
    this.authService.autoLogin();
    this.contentService.getContent()
    .subscribe(data => {
      this.Loadable = true;
      this.applyDataBaseContent(Object.values(data)[0]);
    });
  }
}
