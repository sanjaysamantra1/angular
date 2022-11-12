import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['aChild','name'],
})
export class Child1Component implements OnInit {
  // @Input() aChild:number | undefined;
  aChild: number = 0;
  name:any;

  constructor() {}

  ngOnInit(): void {}
}
