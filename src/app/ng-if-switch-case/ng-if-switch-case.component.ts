import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-ng-if-switch-case',
  templateUrl: './ng-if-switch-case.component.html',
  styleUrls: ['./ng-if-switch-case.component.css']
})
export class NgIfSwitchCaseComponent implements OnInit {

  num : number = 0;

  inc() {
    this.num++;
  }

  constructor() { }

  ngOnInit() {
  }

}
