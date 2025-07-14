import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details-fountain',
  templateUrl: './details-fountain.page.html',
  styleUrls: ['./details-fountain.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsFountainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
