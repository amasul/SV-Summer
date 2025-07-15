import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

import {
  IonHeader, IonToolbar, IonTitle, IonSearchbar,
  IonContent, IonList, IonItem, IonLabel, IonText
} from '@ionic/angular/standalone';

import { ArtworkStoreService, Artwork } from '../services/mock-artworks.service';

@Component({
  selector: 'app-tab3',
  standalone: true,
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonSearchbar,
    IonContent, IonList, IonItem, IonLabel, IonText
  ]
})
export class Tab3Page {
  private readonly term$ = new BehaviorSubject<string>('');

  filteredArtworks$: Observable<Artwork[]> = combineLatest([
    this.store.artworks$,
    this.term$
  ]).pipe(
    map(([arts, term]) => {
      term = term.toLowerCase().trim();
      return term
        ? arts.filter(a =>
            a.title.toLowerCase().includes(term) ||
            a.artist.toLowerCase().includes(term))
        : arts;
    })
  );

  constructor(private store: ArtworkStoreService) {}

  onSearchChange(ev: any) { this.term$.next(ev.detail.value ?? ''); }
}
