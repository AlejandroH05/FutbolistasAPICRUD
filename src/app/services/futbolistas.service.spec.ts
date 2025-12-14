import { TestBed } from '@angular/core/testing';

import { FutbolistasService } from './futbolistas.service';

describe('FutbolistasService', () => {
  let service: FutbolistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutbolistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
