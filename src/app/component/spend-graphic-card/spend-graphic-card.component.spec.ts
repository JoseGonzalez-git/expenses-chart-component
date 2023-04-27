import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendGraphicCardComponent } from './spend-graphic-card.component';

describe('SpendGraphicCardComponent', () => {
  let component: SpendGraphicCardComponent;
  let fixture: ComponentFixture<SpendGraphicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendGraphicCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendGraphicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
