import { TestBed, inject } from '@angular/core/testing';

import { SqlService } from './sql.service';

describe('SqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SqlService]
    });
  });

  it('should be created', inject([SqlService], (service: SqlService) => {
    expect(service).toBeTruthy();
  }));
});
