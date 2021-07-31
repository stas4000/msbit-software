import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() contactForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  get name() { return this.contactForm.get('name'); }
  get organization() { return this.contactForm.get('organization'); }
}
