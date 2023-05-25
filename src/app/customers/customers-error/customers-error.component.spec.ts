import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersErrorComponent } from './customers-error.component';

describe('CustomersErrorComponent', () => {
  let component: CustomersErrorComponent;
  let fixture: ComponentFixture<CustomersErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
