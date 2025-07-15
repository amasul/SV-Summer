import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Artwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

export interface details{
  id: number;
  ArtworkId: number;
  
}

/** Central, reactive store for all artworks */
@Injectable({ providedIn: 'root' })
export class ArtworkStoreService {
  /* -----------------------------------------
   *  Initial mock data (same as before)
   * --------------------------------------- */
  private readonly seed: Artwork[] = [
    {
      id: 1,
      title: 'The Ceiling of a Building',
      artist: "Riza-yi 'Abbasi",
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: 5,
      isLiked: false
    },
    {
      id: 2,
      title: 'Red and Blue roses in vase',
      artist: 'Artist 2',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: 30,
      isLiked: false
    },
    {
      id: 3,
      title: 'Two People Riding Horses by Lake',
      artist: 'Artist 3',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: 102,
      isLiked: false
    },
    {
      id: 4,
      title: 'Black and White Bird',
      artist: 'Artist 4',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: 23,
      isLiked: false
    },
    {
      id: 5,
      title: 'Brown and White Sail Ship on Sea',
      artist: 'Artist 5',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: 33,
      isLiked: false
    },
    {
      id: 6,
      title: 'A Woman Sitting by a Fountain',
      artist: 'Artist 6',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: 18,
      isLiked: false
    }
  ];

  /* Reactive source-of-truth */
  private readonly _artworks$ = new BehaviorSubject<Artwork[]>([...this.seed]);

  /* Read-only stream the pages will subscribe to */
  readonly artworks$ = this._artworks$.asObservable();

  /* -----------------------------------------
   *  Mutations
   * --------------------------------------- */
  toggleLike(id: number): void {
    const next = this._artworks$.value.map(a => {
      if (a.id !== id) return a;
      const isLiked = !a.isLiked;
      return {
        ...a,
        isLiked,
        likes: a.likes + (isLiked ? 1 : -1)
      };
    });
    this._artworks$.next(next);
  }
}
