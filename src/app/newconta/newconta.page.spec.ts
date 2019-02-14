import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontaPage } from './newconta.page';

describe('NewcontaPage', () => {
  let component: NewcontaPage;
  let fixture: ComponentFixture<NewcontaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcontaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcontaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
