import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-first]',
  template: `<div>
  Inline Template
  Second
  Third
  </div>`,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
