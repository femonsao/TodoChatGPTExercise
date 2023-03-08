import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdButtonComponent } from './td-button.component';

describe('TdButtonComponent', () => {
  let component: TdButtonComponent;
  let fixture: ComponentFixture<TdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
