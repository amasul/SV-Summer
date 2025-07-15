import { Component, Input } from '@angular/core';
import {
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon
} from '@ionic/angular/standalone';
import { Artwork, ArtworkStoreService } from '../../services/mock-artworks.service';

@Component({
  selector: 'app-artwork-card',
  standalone: true,
  templateUrl: './artwork-card.component.html',   // ← external HTML
  styleUrls: ['./artwork-card.component.scss'],
  imports: [
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon
  ]
})

export class ArtworkCardComponent {
  /** Artwork being displayed */
  @Input() artwork!: Artwork;

  constructor(
    private store: ArtworkStoreService,
  ) {}

  toggleLike(): void {
    this.store.toggleLike(this.artwork.id);
  }
}
