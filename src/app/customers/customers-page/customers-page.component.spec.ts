import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumersPageComponent } from './costumers-page.component';

describe('CostumersPageComponent', () => {
  let component: CostumersPageComponent;
  let fixture: ComponentFixture<CostumersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostumersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostumersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
