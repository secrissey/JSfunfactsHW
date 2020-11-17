import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HilevelfunComponent } from './hilevelfun.component';

describe('HilevelfunComponent', () => {
  let component: HilevelfunComponent;
  let fixture: ComponentFixture<HilevelfunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HilevelfunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HilevelfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
