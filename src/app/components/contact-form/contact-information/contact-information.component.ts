import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {
  contactInformationCount: number[] = [0];
  selectedTypes: any[] = [];
  @Input() contactForm!: FormGroup;
  @Output() saveUser = new EventEmitter<any>();
  constructor() {
  }
  ngOnInit(): void {
    this.addContactInformationForm(this.contactInformationCount);
  }
  addContactInformationForm(contactInformationCount: number[]) {
    this.contactInformationCount = Array(contactInformationCount.length+1).fill(1).map((x,i)=>i);
    const contactInformationGroup = new FormGroup({
      type: new FormControl("Email", [Validators.required]),
      label: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^\\+?(972|0)(\-)?0?(([23489]{1}\d{7})|[5]{1}\\d{8})$")])
    })
    this.contactInformation.push(contactInformationGroup);
    // console.log(this.contactInformation.controls);
  }
  deleteElement(contactId:number) {
    let elementToRemove = document.getElementById("contact"+contactId);
    if(elementToRemove) {
      elementToRemove.remove();
    }
    this.contactInformation.removeAt(contactId);
  }
  get contactInformation() {
    return this.contactForm.controls["contactInformation"] as FormArray;
  }
  checkValidControls() {
    const invalid = [];
    const controls = this.contactForm.controls;
    let responseOfInvalid: any = [];
    for (const name in controls) {
      if(name == "contactInformation") {
        for (let contact in (<any>controls[name]).controls) {
          for (let contactControlName in (<any>controls[name]).controls[contact].controls) {
            if ((<any>controls[name]).controls[contact].controls[contactControlName].invalid) {
              invalid.push({name:contactControlName, id:contact});
            }
          }
        }
      }
      if (controls[name].invalid) {
        if(name !== "contactInformation") {
          invalid.push({name:name, id:false});
        }
      }
      responseOfInvalid = invalid.filter((field) => {
        for(let selectedType of this.selectedTypes) {
          if(field.id === false || field.name == "label" || (field.id == selectedType.id && field.name.toLowerCase() == selectedType.type.toLowerCase())) {
            return field;
          }
        }
        return false;
      });
    }
    console.log(responseOfInvalid, "invalid array after filter");
    return responseOfInvalid;
  }
  selectedTypeEmitted(id: number, type: string) {
    let foundId = false;
    if(this.selectedTypes.length > 0) {
      for (let selectedTypeId in this.selectedTypes) {
        if(this.selectedTypes[selectedTypeId].id == id) {
          this.selectedTypes[selectedTypeId].type = type;
          foundId = true;
        }
      }
    }
    if(!foundId) {
      this.selectedTypes.push({id: id, type:type});
    }
  }
  beforeSubmit(event: any) {
    let invalidArray = this.checkValidControls();
    if(invalidArray.length > 0) {
      this.contactForm.markAllAsTouched();
    } else {
      this.saveUser.emit(event);
    }
  }
}
