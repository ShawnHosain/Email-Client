import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input()sender : string;
  @Input()subject: string;
  @Input()content: string;
  @Input()read: Boolean;
  @Input()time: number;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.read = true;
  }

}
