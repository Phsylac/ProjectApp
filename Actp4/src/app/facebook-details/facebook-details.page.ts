import { Component, OnInit } from '@angular/core';
import { facebook, facebooks } from '../facebooks';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-facebook-details',
  templateUrl: './facebook-details.page.html',
  styleUrls: ['./facebook-details.page.scss'],
})
export class FacebookDetailsPage implements OnInit {
  facebook: facebook | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const facebookId = Number(routeParams.get('id'));
    console.log(facebookId);

    this.facebook = facebooks.find(facebook => facebook.id === facebookId);
    console.log(this.facebook);
  }

}
