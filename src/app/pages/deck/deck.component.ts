// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Deck } from 'src/app/services/api.models';
// import { ApiService } from 'src/app/services/api.service';

// @Component({
//   selector: 'app-deck',
//   templateUrl: './deck.component.html',
//   styleUrls: ['./deck.component.scss']
// })
// export class DeckComponent implements OnInit {

//   get deckId(): string {
//     return this.activatedRoute.snapshot.paramMap.get('deckId');
//   }

//   public deck: Deck = {};

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private apiService: ApiService
//   ) { }

//   ngOnInit(): void {
//     if (this.deckId) {
//       this.getDeck();
//     } else {
//       this.postDeck();
//     }
//   }

//   deckDraw() {
//     this.apiService
//       .getDeckDraw(this.deck.deck_id)
//       .subscribe((draw) => this.deck = draw.deck);
//   }

//   getDeck() {
//     this.apiService
//       .getDeck(this.deckId)
//       .subscribe((deck) => this.deck = deck);
//   }

//   postDeck() {
//     this.apiService
//       .postDeck()
//       .subscribe((deck) => this.deck = deck);
//   }
// }
// import { Component, Input, OnInit } from '@angular/core';
// import { Card, Deck } from 'src/app/services/api.models';
// import { ApiService } from 'src/app/services/api.service';

// @Component({
//   selector: 'app-deck',
//   templateUrl: './deck.component.html',
//   styleUrls: ['./deck.component.scss']
// })

// export class DeckComponent implements OnInit {
//   @Input() deck: Deck = {};

//   public cards: Card[] = [];

//   constructor(
//     private apiService: ApiService
//   ) { }

//   ngOnInit(): void {
//    // this.deckDraw();
//   }

//   deckDraw() {
//     this.apiService
//       .getDeckDraw(this.deck.deck_id)
//       .subscribe((draw) => this.cards = draw.cards);
//   }
// }
import { Component, Input, OnInit } from '@angular/core';
import { Card, Deck } from 'src/app/services/api.models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})

export class DeckComponent implements OnInit {
  @Input() deck: Deck = {};

  public cards: Card[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
   // this.deckDraw();
  }

  deckDraw() {
    this.apiService
      .getDeckDraw(this.deck.deck_id)
      .subscribe((draw) => this.cards = draw.cards);
  }
}