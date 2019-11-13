import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  topHeaders: string[] = ["What's new", "FAQ", "Blog", "Login"];
  logoImagePath: string = "./assets/images/logo.png";
  mainHeaders: string[] = ["PERSONALIZE VIDEO", "FEATURES","RESOURCES","SOLUTIONS","INTEGRATIONS","PRICING"]
  constructor() { }

  ngOnInit() {
  }

}
