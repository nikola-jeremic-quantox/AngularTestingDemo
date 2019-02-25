import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const mockUsers = [
  {id: 1, name: 'Nikola', role: 'admin'},
  {id: 2, name: 'Petar', role: 'user'},
  {id: 3, name: 'Djole', role: 'user'},
  {id: 4, name: 'Kristina', role: 'manager'},
];

@Injectable({
  providedIn: 'root'
})

export class MockDataService {

  constructor() { }

  getUsers() {
    return of(mockUsers);
  }
}
