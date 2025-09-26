import { TestBed } from "@angular/core/testing"
import { CounterService } from "./counter.service"

describe('CounterService Test', () => {
    let cs: CounterService;
    beforeEach(() => {
        cs = TestBed.inject(CounterService);
        spyOn(cs, 'inc').and.returnValue(11);
    })
    it('inc() should increment by 1', () => {
        expect(cs.inc(10)).toBe(11);
        expect(cs.inc).toHaveBeenCalledWith(10);

    })
})