import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelecterComponent } from './user-selecter.component';

describe('UserSelecterComponent', () => {
  let component: UserSelecterComponent;
  let fixture: ComponentFixture<UserSelecterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSelecterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSelecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
