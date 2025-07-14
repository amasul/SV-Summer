import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsSeaPage } from './details-sea.page';

describe('DetailsSeaPage', () => {
  let component: DetailsSeaPage;
  let fixture: ComponentFixture<DetailsSeaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSeaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
