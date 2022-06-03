import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlatilloComponent } from './edit-platillo.component';

describe('EditPlatilloComponent', () => {
  let component: EditPlatilloComponent;
  let fixture: ComponentFixture<EditPlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlatilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
