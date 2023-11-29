import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-intro-card',
  templateUrl: './profile-intro-card.component.html',
  styleUrls: ['./profile-intro-card.component.scss']
})
export class ProfileIntroCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downladFile(){
    window.open('/assets/doc/Rucha Saraf.pdf', '_blank');
  }
}
