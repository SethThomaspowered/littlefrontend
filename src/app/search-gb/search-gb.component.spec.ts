import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGBComponent } from './search-gb.component';

describe('SearchGBComponent', () => {
  let component: SearchGBComponent;
  let fixture: ComponentFixture<SearchGBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
