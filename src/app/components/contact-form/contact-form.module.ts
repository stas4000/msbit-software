import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { CustomBarComponent } from './custom-bar/custom-bar.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { ContactInformationFormComponent } from './contact-information/contact-information-form/contact-information-form.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    UserProfileComponent,
    ContactInformationComponent,
    CustomBarComponent,
    ContactInformationFormComponent
  ],
  exports: [
    UserProfileComponent,
    ContactInformationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class ContactFormModule { }
