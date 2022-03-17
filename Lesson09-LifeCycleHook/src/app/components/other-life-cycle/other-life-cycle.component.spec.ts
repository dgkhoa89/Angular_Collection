import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLifeCycleComponent } from './other-life-cycle.component';

describe('OtherLifeCycleComponent', () => {
  let component: OtherLifeCycleComponent;
  let fixture: ComponentFixture<OtherLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
