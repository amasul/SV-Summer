import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsVasePage } from './details-vase.page';

describe('DetailsVasePage', () => {
  let component: DetailsVasePage;
  let fixture: ComponentFixture<DetailsVasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
