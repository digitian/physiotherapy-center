import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  introText: string = environment.about_introduction;
  introVideo: string = environment.about_link;
  firstDoc_Name: string = environment.about_1stdoc_name;
  firstDoc_Info: string = environment.about_1stdoc_info;
  secondDoc_Name: string = environment.about_2nddoc_name;
  secondDoc_Info: string = environment.about_2nddoc_info;
  introStory: string = environment.about_story;
  gallery: any = environment.gallery
}
