import { TestBed, async, inject } from '@angular/core/testing';

import { GurdGuard } from './gurd.guard';

describe('GurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GurdGuard]
    });
  });

  it('should ...', inject([GurdGuard], (guard: GurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
