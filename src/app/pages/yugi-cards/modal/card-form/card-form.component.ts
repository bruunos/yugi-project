import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CARD_TYPES } from '../../cards.constants';
import { Card, CardType } from '../../cards.models';

import { CardsService } from '../../cards.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent implements OnInit, OnDestroy {

  @Input() card: Card;

  get cardTypes() {
    // debugger;
    return Object
      .values(CardType)
      .map(value => {
        return {
          label: CARD_TYPES[value],
          value: value,
        }
      });
  }

  public cardForm = new FormGroup({
    id: new FormControl(null),
    atk: new FormControl(null),
    def: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    type: new FormControl(null),
  });

  public showFeedbackOnlyPlay = false;

  private subscriptions = new Subscription();


  constructor(
    private cardsService: CardsService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  loadForm() {
    if (this.card) {
      this.cardForm.patchValue(this.card);
    }

    this.onChangeType();
  }

  close(card?: Card) {
    
    this.activeModal.close(card);
    
  }

  submit() {
    const card: Card = this.cardForm.value;

    // console.log(user);

    if (this.cardForm.invalid) {
      return;
    }

    this.cardsService
      .save(card)
      .subscribe((card) => this.close(card));
      this.activeModal.close(card);
      alert(card.atk + card.def+ card.name + card.type + " salvo com sucesso");
  }

  onChangeType() {
    const onChange$ = this.cardForm
      .get('type').valueChanges
      .subscribe((value) => this.showFeedbackOnlyPlay = value === CardType.Magic);

    this.subscriptions.add(onChange$);
  }
}