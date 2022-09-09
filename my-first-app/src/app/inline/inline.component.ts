import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: '<p>I am inline</p>',
  styleUrls: ['./inline.component.css']
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
