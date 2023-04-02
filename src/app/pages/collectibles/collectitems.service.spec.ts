import { TestBed } from '@angular/core/testing';

import { CollectitemsService } from './collectitems.service';

describe('CollectitemsService', () => {
  let service: CollectitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
