import { Component, OnInit } from '@angular/core';
import { facebook, facebooks } from '../facebooks';
@Component({
  selector: 'app-facebooks',
  templateUrl: './facebooks.page.html',
  styleUrls: ['./facebooks.page.scss'],
})
export class FacebooksPage implements OnInit {
  facebooks = facebooks;
  constructor() { }

  ngOnInit() {
  }

}
