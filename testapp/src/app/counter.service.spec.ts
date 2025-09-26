import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

xdescribe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('increment by 1', () => {
    expect(service.inc(10)).toEqual(11);
  });
 
   it('decrement by 1', () => {
    expect(service.dec(12)).toEqual(11);
  });
 
});
