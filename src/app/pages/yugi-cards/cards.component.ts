import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardFormComponent } from './modal/card-form/card-form.component';
import { Card } from './cards.models';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public cards: Card[] = [];

  constructor(
    private cardsService: CardsService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.cardsService
      .getAll()
      .subscribe((cards) => this.cards = cards);
  }

  add() {
    const modalRef = this.modalService.open(CardFormComponent);
    modalRef.result
      .then((card) => {
        this.cards.push(card);
      });
  }
}
