import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationDataComponent } from './registration-data.component';

describe('RegistrationDataComponent', () => {
  let component: RegistrationDataComponent;
  let fixture: ComponentFixture<RegistrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
