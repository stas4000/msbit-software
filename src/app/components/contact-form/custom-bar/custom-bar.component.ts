import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-bar',
  templateUrl: './custom-bar.component.html',
  styleUrls: ['./custom-bar.component.scss']
})
export class CustomBarComponent implements OnInit {
  @Input() name:string = ''; // decorate the property with @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
