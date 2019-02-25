import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpDataService {

  url = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) { }

  getTodo() {
    return this.http.get(this.url);
  }

}
