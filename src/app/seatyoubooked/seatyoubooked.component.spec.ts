import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatyoubookedComponent } from './seatyoubooked.component';

describe('SeatyoubookedComponent', () => {
  let component: SeatyoubookedComponent;
  let fixture: ComponentFixture<SeatyoubookedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatyoubookedComponent]
    });
    fixture = TestBed.createComponent(SeatyoubookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
