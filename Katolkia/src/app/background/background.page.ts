import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.page.html',
  styleUrls: ['./background.page.scss'],
})
export class BackgroundPage implements OnInit {
  slideOpts: any = {};
  slideImages: any [] = [];


  constructor() { }

  ngOnInit() {
    this.slideImages =[
      'assets/icon/12.jpeg',
    ]
  }

}
