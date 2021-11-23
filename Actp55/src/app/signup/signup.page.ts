import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  profileform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  })
  constructor() { }

  ngOnInit() {
  }

}
