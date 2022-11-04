import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  num: number = 0;
  dayNum: number = new Date().getDay();
  cars: string[] = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
  states: string[] = ['Kerala', 'Odisha', 'Bihar', 'AP', 'Karnataka', 'UP'];
  selectedState: string = 'Kerala';

  statesArr = [
    { name: 'Kerala', val: 'KL' },
    { name: 'Odisha', val: 'OD' },
    { name: 'Bihar', val: 'BH' },
    { name: 'Andhra Pradesh', val: 'AP' },
    { name: 'Utter Pradesh', val: 'UP' },
  ];

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];

  constructor() {}
  ngOnInit(): void {}
}
