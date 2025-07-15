import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Tab1Page } from './tab1.page';
import { ArtworkStoreService } from '../services/mock-artworks.service';

describe('Tab1Page (stand-alone)', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<Tab1Page>>;
  let component: Tab1Page;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        /* Stand-alone component goes in IMPORTS, not declarations */
        CommonModule,          // gives *ngFor + | async
        Tab1Page
      ],
      providers: [ArtworkStoreService]  // real service is fine (no deps)
    }).compileComponents();

    fixture   = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
