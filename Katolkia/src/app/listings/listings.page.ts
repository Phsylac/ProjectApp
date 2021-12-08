import { Component, OnInit } from '@angular/core';
import { Listing, listings } from '../listings';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {
  listings = listings;
  constructor() { }

  ngOnInit() {
  }

}
