import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaArtigoPage } from './ficha-artigo.page';

describe('FichaArtigoPage', () => {
  let component: FichaArtigoPage;
  let fixture: ComponentFixture<FichaArtigoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaArtigoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaArtigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
