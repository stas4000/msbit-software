import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {ContactForm, contactInformation} from "./shared/interfaces/contact-form";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'msbit-software';
  contactForm: FormGroup;
  contactFormData:ContactForm = {
    name: "",
    contactInformation: [],
    organization: "",
  };

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contactFormData.name, [
        Validators.required,
      ]),
      organization: new FormControl(this.contactFormData.organization),
      contactInformation: new FormArray([])
    })
  }

  get contactInformation() { return this.contactForm.get('contactInformation'); }

  saveUserProfile() {
    alert('thank you! user saved successfully.');
  }
}



