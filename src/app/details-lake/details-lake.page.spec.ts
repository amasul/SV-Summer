import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsLakePage } from './details-lake.page';

describe('DetailsLakePage', () => {
  let component: DetailsLakePage;
  let fixture: ComponentFixture<DetailsLakePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
