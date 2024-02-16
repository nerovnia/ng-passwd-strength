import { TestBed } from '@angular/core/testing';

import { PasswdStrengthCheckService } from './passwd-strength-check.service';

describe('PasswdStrengthCheckService', () => {
  let service: PasswdStrengthCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswdStrengthCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
