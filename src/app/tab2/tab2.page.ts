import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol,          //  ← IonRow & IonCol added
  IonCardContent, IonButton, IonIcon
} from '@ionic/angular/standalone';


import { ArtworkStoreService, Artwork } from '../services/mock-artworks.service';
import { ArtworkCardComponent } from '../components/artwork-card/artwork-card.component';   // ✅ ONE dot-dot


@Component({
  selector: 'app-tab2',
  standalone: true,
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [
    CommonModule, AsyncPipe,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonCardContent, IonButton, IonIcon,
    ArtworkCardComponent
  ]

})

export class Tab2Page {
  likedArtworks$: Observable<Artwork[]> = this.store.artworks$.pipe(
    map(arr => arr.filter(a => a.isLiked))
  );

  constructor(private store: ArtworkStoreService) { }

  openComment(art: Artwork) {
    console.log('comment on', art.title);
  }
}
