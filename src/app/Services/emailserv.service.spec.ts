import { TestBed } from '@angular/core/testing';

import { EmailservService } from './emailserv.service';

describe('EmailservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailservService = TestBed.get(EmailservService);
    expect(service).toBeTruthy();
  });
});
