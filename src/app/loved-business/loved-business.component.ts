import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loved-business',
  templateUrl: './loved-business.component.html',
  styleUrls: ['./loved-business.component.scss']
})
export class LovedBusinessComponent implements OnInit {

  businessLogosPaths: string[] = [
    "../../assets/images/loved_business/chargebee.png",
    "../../assets/images/loved_business/goutlet.png",
    "../../assets/images/loved_business/cloudchoice.png",
    "../../assets/images/loved_business/tailwind.png",
    "../../assets/images/loved_business/york.png"
  ]
  constructor() { }

  ngOnInit() {
  }

}
