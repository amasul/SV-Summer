import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Tab2Page } from './tab2.page';
import { ArtworkStoreService } from '../services/mock-artworks.service';

describe('Tab2Page (stand-alone)', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<Tab2Page>>;
  let component: Tab2Page;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, Tab2Page],
      providers: [ArtworkStoreService]
    }).compileComponents();

    fixture   = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
