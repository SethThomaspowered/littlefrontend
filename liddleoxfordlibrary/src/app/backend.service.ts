import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  urb = 'http://localhost:9092';

  constructor( private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.urb}/api/books`)
  }
  getBook(id: string) {
    return this.http.get(`${this.urb}/api/books/${id}`);
  }
}
