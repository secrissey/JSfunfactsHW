import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HilevelfunctMapComponent } from './hilevelfunct-map.component';

describe('HilevelfunctMapComponent', () => {
  let component: HilevelfunctMapComponent;
  let fixture: ComponentFixture<HilevelfunctMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HilevelfunctMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HilevelfunctMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
