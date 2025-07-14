import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel, ExploreContainerComponent],
})
export class Tab3Page {
  items = [
    { name: 'The Lovers', category: 'painting' },
    { name: 'Great Indian Fruit Bat', category: 'Animal' },
    { name: 'A Stallion', category: 'Animal' }
  ];

  filterredItems = [...this.items];

  constructor() {}

  onSearchChange(event: any) {
    const searchTerm = event.detail.value.toLowerCase();
    this.filterredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(searchTerm)
    );
  }
}
