import { Component, Output, OnInit} from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'ProjectOne';
  PSender:string = 'default Sender';
  PSubject:string = 'default Subject';
  PContent:string = 'default Content';

  buttonPrompt(){
    this.PSender = prompt('Name of Sender (you): ');
    this.PSubject = prompt('Subject: ');
    this.PContent = prompt('Email Content: ');
  }
}


