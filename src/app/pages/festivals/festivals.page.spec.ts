import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalsPage } from './festivals.page';

describe('FestivalsPage', () => {
  let component: FestivalsPage;
  let fixture: ComponentFixture<FestivalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
