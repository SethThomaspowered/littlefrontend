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
  addBook(bookTitle: string, authorName: string){
    const book ={
      "bookTitle": bookTitle,
      "authorName": authorName,
      "isAvailable": true    
    };
    console.log(book);
    this.http.post(`${this.urb}/api/books`, book).subscribe(response=> console.log(response));
  }
  addGBBook(title: string, description: string, image: string, googleId: string, author: string){
    const gBBook ={
      "title": title,
      "description": description,
      "image": image,
      "googleId": googleId,
      "author": author
    };
    console.log(gBBook);
    this.http.post(`${this.urb}/api/gbbooks`, gBBook).subscribe(response=>console.log(response));
  }
}
