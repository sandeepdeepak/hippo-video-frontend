import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-refer-and-benefit',
  templateUrl: './refer-and-benefit.component.html',
  styleUrls: ['./refer-and-benefit.component.scss']
})
export class ReferAndBenefitComponent implements OnInit {

  referBoxes: any[] = [
    {
      referTitle: 'Sign up for Hippo Video',
      referPoints: [
        'Sign up using business account only.',
        'Add your Product Hunt referral code.',
        'Get 100 video emails credited to your account on sign up'
      ],
      color: '#f26b5c'

    },
    {
      referTitle: 'Refer your business contacts/friends',
      referPoints: [
        'Refer your contacts to sign up for Hippo Video.',
        'You get additional 50 personalized video emails for every contact you refer.',
        'Refer up to a maximum of 10 contacts.'
      ],
      color: '#61bf7f'
    },
    {
      referTitle: 'For Existing Users',
      referPoints: [
        'Sign in with your business account and add the referral code to enjoy the benefits.',
      ],
      color: '#8d65ab'
    }
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'setting',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/images/setting-icon.svg'));
  }

  ngOnInit() {
  }

}
