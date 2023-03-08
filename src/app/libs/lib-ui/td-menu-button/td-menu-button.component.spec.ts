import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdMenuButtonComponent } from './td-menu-button.component';

describe('TdMenuButtonComponent', () => {
  let component: TdMenuButtonComponent;
  let fixture: ComponentFixture<TdMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdMenuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
