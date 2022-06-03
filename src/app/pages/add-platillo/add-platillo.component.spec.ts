import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlatilloComponent } from './add-platillo.component';

describe('AddPlatilloComponent', () => {
  let component: AddPlatilloComponent;
  let fixture: ComponentFixture<AddPlatilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlatilloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlatilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
