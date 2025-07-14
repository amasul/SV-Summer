import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { image } from 'ionicons/icons';
import { NavController } from '@ionic/angular';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonButton]
})
export class Tab1Page {

  likeCount1 = 5;
  isLiked1 = false;

  likeCount2 = 30;
  isLiked2 = false;

  likeCount3 = 102;
  isLiked3 = false;

  likeCount4 = 23;
  isLiked4 = false;

  likeCount5 = 33;
  isLiked5 = false;

  likeCount6 = 18;
  isLiked6 = false;

  addToLikes(artwork: any) {
    this.likeService.addToLikes(artwork); 
  }

  removeFromLikes(artworkId: number) {
  this.likeService.removeFromLikes(artworkId);
}
  


constructor(private navCtrl: NavController,
  private likeService: LikeService
) {}

goToDetails() {
  this.navCtrl.navigateForward('/details');
}

ttoggleLike1() {
  this.isLiked1 = !this.isLiked1;
  this.likeCount1 += this.isLiked1 ? 1 : -1;

  if (this.isLiked1) {
    const artwork = {
  id: 1,
  title: 'The Ceiling of a Building',
  artist: 'Michael Angelo',
  image: 'https://ionicframework.com/docs/img/demos/card-media.png',
  likes: this.likeCount1,
  isLiked: this.isLiked1
};
    this.addToLikes(artwork);
  } else {
    this.removeFromLikes(1);
  }
}

toggleLike1() {
  this.ttoggleLike1();
}

toggleLike2() {
  this.isLiked2 = !this.isLiked2;
  this.likeCount2 += this.isLiked2 ? 1 : -1;

  if (this.isLiked2) {
    const artwork = {
      id: 2,
      title: 'Red and Blue roses in vase',
      artist: 'Willem van',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: this.likeCount2,
      isLiked: this.isLiked2
    };
    this.addToLikes(artwork);
  } else {
    this.removeFromLikes(2);
  }
}

toggleLike3() {
  this.isLiked3 = !this.isLiked3;
  this.likeCount3 += this.isLiked3 ? 1 : -1;

  if (this.isLiked3) {
    const artwork = {
      id: 3,
      title: 'Two People Riding Horses by Lake',
      artist: 'David Cox Junior',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: this.likeCount3,
      isLiked: this.isLiked3
    };
    this.addToLikes(artwork);
  } else {
    this.removeFromLikes(3);
  }
}

toggleLike4() {
  this.isLiked4 = !this.isLiked4;
  this.likeCount4 += this.isLiked4 ? 1 : -1;

  if (this.isLiked4) {
    const artwork = {
      id: 4,
      title: 'Black and White Bird',
      artist: 'Robin',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: this.likeCount4,
      isLiked: this.isLiked4
    };
    this.addToLikes(artwork);
  } else {
    this.removeFromLikes(4);
  }
}

toggleLike5() {
  this.isLiked5 = !this.isLiked5;
  this.likeCount5 += this.isLiked5 ? 1 : -1;

  if (this.isLiked5) {
    const artwork = {
      id: 5,
      title: 'Brown and White Sail Ship on Sea',
      artist: 'Netherlands',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: this.likeCount5,
      isLiked: this.isLiked5
    };
    this.addToLikes(artwork);
  } else {
    this.removeFromLikes(5);
  }
}

toggleLike6() {
  this.isLiked6 = !this.isLiked6;
  this.likeCount6 += this.isLiked6 ? 1 : -1;

  if (this.isLiked6) {
    const artwork = {
      id: 6,
      title: 'A Woman Standing on a Balcony',
      artist: 'John Levary',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      likes: this.likeCount6,
      isLiked: this.isLiked6
    };
    this.addToLikes(artwork);
  } else {
    this.removeFromLikes(6);
  }
}
}