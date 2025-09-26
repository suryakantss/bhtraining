import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('initial value of count=0 ', () => {
    expect(component.count).toBe(0)
  });
  it('counter should increment by 1', () => {
    fixture.nativeElement.querySelector('button').click();
    expect(component.count).toBe(1);
  });

    it('counter should increment by 2', () => {
    fixture.nativeElement.querySelector('button').click();
    fixture.nativeElement.querySelector('button').click();
    expect(component.count).toBe(2);
  });

});
