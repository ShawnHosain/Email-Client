import { Component, OnInit } from '@angular/core';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ProjectOne';
  PSender:string = 'default Sender';
  PSubject:string = 'default Subject';
  PContent:string = 'default Content';
  public PEmails: Array<EmailComponent> = [];
  PEmail: EmailComponent;
  PTime:number;
  
  constructor() { }

  ngOnInit() {
  }

  buttonPrompt(){
    let newtime = Date.now();
    this.PEmail = new EmailComponent
    this.PEmail.sender = prompt('Name of Sender (you): ');
    this.PEmail.subject = prompt('Subject: ');
    this.PEmail.content = prompt('Email Content: ');
    this.PEmail.read = false;
    this.PEmail.time = newtime;
    this.PEmails.push(this.PEmail);
  }

}
