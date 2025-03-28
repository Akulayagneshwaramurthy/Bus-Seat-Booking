import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourbookedComponent } from './yourbooked.component';

describe('YourbookedComponent', () => {
  let component: YourbookedComponent;
  let fixture: ComponentFixture<YourbookedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourbookedComponent]
    });
    fixture = TestBed.createComponent(YourbookedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
