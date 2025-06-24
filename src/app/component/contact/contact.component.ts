import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  contact = {
    name: '',
    email: '',
    message: '',
  };

  sendMessage() {
    alert(`Thank you, ${this.contact.name}! Your message has been sent.`);
    // Here you can integrate an API (e.g., Formspree, Firebase) to actually send messages.
  }
}
