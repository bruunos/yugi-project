import { Component, Input, OnInit } from '@angular/core';
import { Card, Deck } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  @Input() deck: Deck = {};

  public cards: Card[] = [];


  constructor(
  
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.deckDraw();
  }

  deckDraw() {
    this.apiService
      .getDeckDraw(this.deck.deck_id)
      .subscribe((draw) => this.cards = draw.cards);
  }
}
