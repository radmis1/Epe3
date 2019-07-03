import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerPage } from './leer.page';

describe('LeerPage', () => {
  let component: LeerPage;
  let fixture: ComponentFixture<LeerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
