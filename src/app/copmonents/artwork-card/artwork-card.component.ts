iimport { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss']
})
export class ArtworkCardComponent implements OnInit {

  @Input() title!: string;
  @Input() artist!: string;
  @Input() image!: string;
  @Input() likes!: number;

  constructor() {}

  ngOnInit(): void {}
}
