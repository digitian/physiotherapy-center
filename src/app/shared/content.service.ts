import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FizyoconContent } from "./content.model";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { HomeComponent } from "./home/home.component";

@Injectable({providedIn: 'root'})

export class ContentService {

  constructor(private http: HttpClient) { }

  getContent(): Observable<FizyoconContent> {
    return this.http.get<FizyoconContent>(environment.databaseUrl + 'content.json')
  }

  saveContent() {
    const content: FizyoconContent = {
      intro_text: environment.motto,
      intro_logo: environment.logo,
      about_introduction: environment.about_introduction,
      about_link: environment.about_link,
      about_1stdoc_name: environment.about_1stdoc_name,
      about_1stdoc_info: environment.about_1stdoc_info,
      about_2nddoc_name: environment.about_2nddoc_name,
      about_2nddoc_info: environment.about_2nddoc_info,
      about_story: environment.about_story,
      phone: environment.phone,
      email: environment.email,
      facebook: environment.facebook,
      twitter: environment.twitter,
      youtube: environment.youtube,
      whatsapp: environment.whatsapp,
      gallery: environment.gallery
    }
    this.http.delete(environment.databaseUrl + 'content.json')
    .subscribe();
    return this.http.post<FizyoconContent>(environment.databaseUrl + 'content.json', content)
    .subscribe(responseData => console.log(responseData));
  }


}
