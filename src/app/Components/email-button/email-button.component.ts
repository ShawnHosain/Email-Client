import { Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-email-button',
  templateUrl: './email-button.component.html',
  styleUrls: ['./email-button.component.scss']
})
export class EmailButtonComponent implements OnInit {
  sender : string = 'shawn';
  subject: string = 'testTitle'
  content: string = 'testContent';
  
  constructor() {
  }
  sendEmail(){

  }
  ngOnInit() {
  }

}
