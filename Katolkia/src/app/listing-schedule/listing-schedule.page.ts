import { Component, OnInit } from '@angular/core';
import { Listing, listings } from '../listings';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listing-schedule',
  templateUrl: './listing-schedule.page.html',
  styleUrls: ['./listing-schedule.page.scss'],
})
export class ListingSchedulePage implements OnInit {
listing: Listing | undefined;
title ='Schedule Visit';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeFarams = this.route.snapshot.paramMap;
    const listingId = Number(routeFarams.get('id'));
    // console.log(listingId);

    this.listing = listings.find(listing => listing.id === listingId);
    // console.log(this.listing);
  }

}
