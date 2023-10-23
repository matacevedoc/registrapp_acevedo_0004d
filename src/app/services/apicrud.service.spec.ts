import { TestBed } from '@angular/core/testing';

import { ApiCrudService } from './apicrud.service';

describe('ApicrudService', () => {
  let service: ApiCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
