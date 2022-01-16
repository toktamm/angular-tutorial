import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-first]',
  template: `<div>
  Inline Template
  Second
  Third
  </div>`,
  styles: [`
  div {
    color: red;
  }
  `]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
