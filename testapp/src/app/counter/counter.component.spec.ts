import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { CounterService } from '../counter.service';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let cs:CounterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    cs = TestBed.inject(CounterService);
    spyOn(cs,'inc').and.returnValue(1);
    spyOn(cs,'dec').and.returnValue(-1);
     fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initial count=0',()=>{
    expect(component.count).toEqual(0);
  })
  
  it('increment the count on click',()=>{
    fixture.nativeElement.querySelector('button[id="i"]').click();
    fixture.detectChanges();
    expect(component.count).toEqual(1);
  });

    it('decrement the count on click',()=>{
    fixture.nativeElement.querySelector('button[id="d"]').click();
    fixture.detectChanges();
    expect(component.count).toEqual(-1);
  })


});
