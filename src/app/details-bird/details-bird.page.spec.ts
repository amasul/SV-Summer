import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsBirdPage } from './details-bird.page';

describe('DetailsBirdPage', () => {
  let component: DetailsBirdPage;
  let fixture: ComponentFixture<DetailsBirdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
