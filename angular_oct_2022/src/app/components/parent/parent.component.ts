import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  a: number = 10;

  constructor() {}

  ngOnInit(): void {}

  f1 = function() {
    alert('I am f1...');
  }
}
