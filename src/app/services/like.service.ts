import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private likedArtworks: any[] = [];

  getLikedArtworks() {
    return this.likedArtworks;
  }

  addToLikes(artwork: any) {
    const alreadyLiked = this.likedArtworks.find(a => a.id === artwork.id);
    if (!alreadyLiked) {
      this.likedArtworks.push(artwork);
    }
  }

removeFromLikes(artworkId: number) {
  this.likedArtworks = this.likedArtworks.filter(a => a.id !== artworkId);
}

}
