import { TestBed } from '@angular/core/testing';

import { GetcarddetailService } from './getcarddetail.service';

describe('GetcarddetailService', () => {
  let service: GetcarddetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcarddetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
