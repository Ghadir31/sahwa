import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingSustainablyComponent } from './living-sustainably.component';

describe('LivingSustainablyComponent', () => {
  let component: LivingSustainablyComponent;
  let fixture: ComponentFixture<LivingSustainablyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivingSustainablyComponent]
    });
    fixture = TestBed.createComponent(LivingSustainablyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
