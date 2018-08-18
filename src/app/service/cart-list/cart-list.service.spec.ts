import { TestBed, inject } from '@angular/core/testing';

import { CartListService } from './cart-list.service';

describe('CartListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartListService]
    });
  });

  it('should be created', inject([CartListService], (service: CartListService) => {
    expect(service).toBeTruthy();
  }));
});
