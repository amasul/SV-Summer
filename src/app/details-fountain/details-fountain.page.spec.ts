import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsFountainPage } from './details-fountain.page';

describe('DetailsFountainPage', () => {
  let component: DetailsFountainPage;
  let fixture: ComponentFixture<DetailsFountainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFountainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
