import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JScreatorComponent } from './jscreator.component';

describe('JScreatorComponent', () => {
  let component: JScreatorComponent;
  let fixture: ComponentFixture<JScreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JScreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JScreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
