import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
title = 'Home';
message = 'Facebook Profile';
id = 1;
fontColor = "Violet"
  constructor() {}

  displayMessage(){
    console.log(this.message);
  }

}
