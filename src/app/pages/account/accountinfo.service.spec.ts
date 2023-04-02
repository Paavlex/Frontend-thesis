import { TestBed } from '@angular/core/testing';

import { AccountinfoService } from './accountinfo.service';

describe('AccountinfoService', () => {
  let service: AccountinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
