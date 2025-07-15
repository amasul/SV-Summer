import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Tab3Page } from './tab3.page';
import { ArtworkStoreService } from '../services/mock-artworks.service';

describe('Tab3Page (stand-alone)', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<Tab3Page>>;
  let component: Tab3Page;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, Tab3Page],
      providers: [ArtworkStoreService]
    }).compileComponents();

    fixture   = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
