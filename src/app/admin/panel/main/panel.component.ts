import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ContentService } from 'src/app/shared/content.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  private touchedForm: boolean = false;
  galleryMode: number = 0; // 0: none 1: add photo 2: remove photo
  gallerySelected: any = [];
  gallerySelectedTotal: number = 0;
  gallery: any = environment.gallery

  constructor(
    private contentService: ContentService
  ) { }

  mainFormSubmit(form: NgForm) {
    if (form.value.fc__mottoval && form.value.fc__mottoval != '') {
      this.touchedForm = true;
      environment.motto = form.value.fc__mottoval;
      form.value.fc__mottoval = '';
    }
    if (form.value.fc__logoimgval && form.value.fc__logoimgval != '') {
      this.touchedForm = true;
      environment.logo = form.value.fc__logoimgval;
      form.value.fc__logoimgval = '';
    }
    if (this.touchedForm) {
      this.touchedForm = false;
      this.contentService.saveContent();
    }
  }

  aboutFormSubmit(form: NgForm) {
    if (form.value.fc__about_maintext && form.value.fc__about_maintext != '') {
      this.touchedForm = true;
      environment.about_introduction = form.value.fc__about_maintext;
    }
    if (form.value.fc__about_videolink && form.value.fc__about_videolink != '') {
      this.touchedForm = true;
      environment.about_link = form.value.fc__about_videolink;
    }
    if (form.value.fc__about_firstdoc_name && form.value.fc__about_firstdoc_name != '') {
      this.touchedForm = true;
      environment.about_1stdoc_name = form.value.fc__about_firstdoc_name;
    }
    if (form.value.fc__about_firstdoc_info && form.value.fc__about_firstdoc_info != '') {
      this.touchedForm = true;
      environment.about_1stdoc_info = form.value.fc__about_firstdoc_info;
    }
    if (form.value.fc__about_seconddoc_name && form.value.fc__about_seconddoc_name != '') {
      this.touchedForm = true;
      environment.about_2nddoc_name = form.value.fc__about_seconddoc_name;
    }
    if (form.value.fc__about_seconddoc_info && form.value.fc__about_seconddoc_info != '') {
      this.touchedForm = true;
      environment.about_2nddoc_info = form.value.fc__about_seconddoc_info;
    }
    if (form.value.fc__about_story && form.value.fc__about_story != '') {
      this.touchedForm = true;
      environment.about_story = form.value.fc__about_story;
    }
    if (this.touchedForm) {
      this.touchedForm = false;
      this.contentService.saveContent();
    }
  }

  contactFormSubmit(form: NgForm) {
    if (form.value.fc__contact_phone && form.value.fc__contact_phone != '') {
      this.touchedForm = true;
      environment.phone = form.value.fc__contact_phone;
    }
    if (form.value.fc__contact_email && form.value.fc__contact_email != '') {
      this.touchedForm = true;
      environment.email = form.value.fc__contact_email;
    }
    if (form.value.fc__contact_fax && form.value.fc__contact_fax != '') {
      this.touchedForm = true;
      environment.faks = form.value.fc__contact_fax;
    }
    if (form.value.fc__contact_facebook && form.value.fc__contact_facebook != '') {
      this.touchedForm = true;
      environment.facebook = form.value.fc__contact_facebook;
    }
    if (form.value.fc__contact_twitter && form.value.fc__contact_twitter != '') {
      this.touchedForm = true;
      environment.twitter = form.value.fc__contact_twitter;
    }
    if (form.value.fc__contact_youtube && form.value.fc__contact_youtube != '') {
      this.touchedForm = true;
      environment.youtube = form.value.fc__contact_youtube;
    }
    if (form.value.fc__contact_whatsapp && form.value.fc__contact_whatsapp != '') {
      this.touchedForm = true;
      environment.whatsapp = form.value.fc__contact_whatsapp;
    }
    if (form.value.fc__contact_address && form.value.fc__contact_address != '') {
      this.touchedForm = true;
      environment.address = form.value.fc__contact_address;
    }
    if (this.touchedForm) {
      this.touchedForm = false;
      this.contentService.saveContent();
    }
  }

  toggleAddGalleryMode(mode: number) {
    if (this.galleryMode == mode) {
      // if (this.galleryMode == 2) { // delete mode
      //   const refTag = document.getElementById("galleryTag")?.children;
      //   for (let el of [refTag]) {
      //     console.log(el);
      //   }
      // }
      this.galleryMode = 0;
      this.gallerySelected = [];
      this.gallerySelectedTotal = 0;
      return;
    } else {
      if (this.galleryMode == 2) {
      this.gallerySelectedTotal = 0;
      this.gallerySelected = [];
      }
      this.galleryMode = mode;
    }
  }

  galleryAddFormSubmit(form: NgForm) {
    if (form.value.fc__gallery_img && form.value.fc__gallery_img != '') {
      this.touchedForm = true;
      environment.gallery.push(form.value.fc__gallery_img);
    }
    if (this.touchedForm) {
      this.touchedForm = false;
      this.contentService.saveContent();
    }
  }

  randomFuncYa(id: number) {
    if (!this.gallerySelected[id]) {
      this.gallerySelected[id] = true;
      this.gallerySelectedTotal++
    } else {
      this.gallerySelected[id] = false;
      this.gallerySelectedTotal--
    }
  }

  galleryDeleteFunc() {
    if (this.gallerySelectedTotal != 0) {
      console.log(this.gallerySelected);
      for (let a of this.gallery) {
        if (this.gallerySelected[a.id] && this.gallerySelected[a.id] == true) {
          this.gallery.splice(a.id-1, 1)
        }
      }
      for (let a in this.gallery) {
        this.gallery[a].id = +(a)+1
      }
      this.gallerySelected = [];
      this.gallerySelectedTotal = 0;
    }
  }

}
