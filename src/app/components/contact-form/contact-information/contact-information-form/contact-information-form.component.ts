import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-contact-information-form',
  templateUrl: './contact-information-form.component.html',
  styleUrls: ['./contact-information-form.component.scss']
})
export class ContactInformationFormComponent implements OnInit {
  @Output() delete = new EventEmitter<any>();
  @Output() selectedType = new EventEmitter<any>();
  @Input() contactInformationGroup!: any;
  selectedOption: string = "Email";
  constructor() {
  }
  ngOnInit(): void {
  }

  onTypeChange(value: string) {
    this.selectedOption = value;
  }
  get label() { return this.contactInformationGroup.get('label'); }
  get email() { return this.contactInformationGroup.get('email'); }
  get phone() { return this.contactInformationGroup.get('phone'); }
}
