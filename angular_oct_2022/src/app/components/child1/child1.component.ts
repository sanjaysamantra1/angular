import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['aChild', 'name'],
})
export class Child1Component implements OnInit {
  // @Input() aChild:number | undefined;
  aChild: number = 0;
  name: any;
  age: number = 30;

  constructor() {
    console.log('Child constructor');
  }
  ngOnInit(): void {
    console.log('Child ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('Child ngOnChanges');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('Child ngDoCheck');
  }
}
