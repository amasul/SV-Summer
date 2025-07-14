import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsCeilingPage } from './details-ceiling.page';

describe('DetailsCeilingPage', () => {
  let component: DetailsCeilingPage;
  let fixture: ComponentFixture<DetailsCeilingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCeilingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
