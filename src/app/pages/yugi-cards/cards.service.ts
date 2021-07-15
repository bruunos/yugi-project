import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Card } from './cards.models';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll() {
    return this.httpClient.get<Card[]>(`${environment.apiUrl}/cards`);
  }

  delete(id: string) {
    return this.httpClient.delete<Card>(`${environment.apiUrl}/cards/${id}`);
  }

  save(card: Card) {
    if (card.id) {
      return this.httpClient.put<Card>(`${environment.apiUrl}/cards/${card.id}`, card);
    } else {
      return this.httpClient.post<Card>(`${environment.apiUrl}/cards`, card);
    }
  }
}