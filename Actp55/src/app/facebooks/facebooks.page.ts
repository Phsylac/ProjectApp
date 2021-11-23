import { Component, OnInit } from '@angular/core';
import { facebook, facebooks } from '../facebooks';
import { FacebookService } from '../services/facebook.service';

@Component({
  selector: 'app-facebooks',
  templateUrl: './facebooks.page.html',
  styleUrls: ['./facebooks.page.scss'],
})
export class FacebooksPage implements OnInit {
  //facebooks = facebooks;
  public facebooks = [];
  constructor(private facebookService: FacebookService) { }

  ngOnInit() {
    this.displayFacebooks();
  }

  displayFacebooks(){
    this.facebookService.getFacebooks()
    .subscribe((data: any) => {
      //console.log(data);
      this.facebooks = data;
    });
  }




  
  
}
