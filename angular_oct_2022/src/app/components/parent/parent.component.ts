import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  a: number = 10;
  myName: string = '';
  f1 = function () {
    alert('I am f1...');
  };
  receiveData(name: string) {
    this.myName = name;
  }

  constructor() {
    console.log('Parent constructor');
  }
  ngOnInit(): void {
    console.log('Parent ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('Parent ngOnChanges');
    console.log(changes);
  }
  ngDoCheck(){
    console.log('Parent ngDoCheck');
  }
}
