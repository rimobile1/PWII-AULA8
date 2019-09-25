import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrls: ['./interpolation-binding.component.css']
})
export class InterpolationBindingComponent implements OnInit {

  numero : number = 10;
  quadrado() : number{
    return this.numero * this.numero;
  }

  constructor() { }

  ngOnInit() {
  }

}
