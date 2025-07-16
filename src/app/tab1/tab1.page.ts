import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,          //  ← IonRow & IonCol added
  IonCardContent, IonButton, IonIcon
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

import { ArtworkStoreService, Artwork } from '../services/mock-artworks.service';
import { ArtworkCardComponent } from '../components/artwork-card/artwork-card.component';


@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [
    CommonModule, AsyncPipe,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonCardContent, IonButton, IonIcon,
    ArtworkCardComponent
  ]
})
export class Tab1Page {
  artworks$: Observable<Artwork[]> = this.store.artworks$;

  constructor(
    private store: ArtworkStoreService,
    private nav: NavController
  ) { }

  toggleLike(a: Artwork) {
    this.store.toggleLike(a.id);
  }

  /** Click handler used in template */
  goToDetails(a: Artwork) {
    this.nav.navigateForward('/details', { state: { artworkId: a.id } });
  }
}
