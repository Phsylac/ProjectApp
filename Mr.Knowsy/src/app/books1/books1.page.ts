import { Component, OnInit } from '@angular/core';
import { Books1, books } from '../books';
@Component({
  selector: 'app-books1',
  templateUrl: './books1.page.html',
  styleUrls: ['./books1.page.scss'],
})
export class Books1Page implements OnInit {
  books = books;
  constructor() { }

  ngOnInit() {
  }
  
}
