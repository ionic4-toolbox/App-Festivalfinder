import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandsPage } from './bands.page';

describe('BandsPage', () => {
  let component: BandsPage;
  let fixture: ComponentFixture<BandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
