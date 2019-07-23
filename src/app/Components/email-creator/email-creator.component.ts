import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-creator',
  templateUrl: './email-creator.component.html',
  styleUrls: ['./email-creator.component.scss']
})
export class EmailCreatorComponent implements OnInit {
public emForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.emForm = new FormGroup({
      'recipient': new FormControl(null, Validators.required),
      'subject' : new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required)
    })

  }

}
