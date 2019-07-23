import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCreatorComponent } from './email-creator.component';

describe('EmailCreatorComponent', () => {
  let component: EmailCreatorComponent;
  let fixture: ComponentFixture<EmailCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
