import { TestBed } from '@angular/core/testing';

import { AuthGuardianService } from './auth-guardian.service';

describe('AuthGuardianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardianService = TestBed.get(AuthGuardianService);
    expect(service).toBeTruthy();
  });
});
