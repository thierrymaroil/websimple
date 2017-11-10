import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContentsComponent implements OnInit {
dateJour = new Date;
  constructor() { }

  ngOnInit() {
  }

}
