import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() public updateFormData: Function = (option: string) => {};
  @Input() public checkboxOptions: Array<string> = [];

  constructor() {}

  ngOnInit(): void {}
}
