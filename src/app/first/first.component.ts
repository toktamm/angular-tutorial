import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-first]',
  template: '<div>Inline Template</div>',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
