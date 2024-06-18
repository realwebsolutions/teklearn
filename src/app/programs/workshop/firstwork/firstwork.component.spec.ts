import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstworkComponent } from './firstwork.component';

describe('FirstworkComponent', () => {
  let component: FirstworkComponent;
  let fixture: ComponentFixture<FirstworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstworkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
