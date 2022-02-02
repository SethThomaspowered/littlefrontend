import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  uri = environment.uri;

  constructor( private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.uri}/api/books`)
  }
  getBook(id: string) {
    return this.http.get(`${this.uri}/api/books/${id}`);
  }
  addBook(bookTitle: string, authorName: string){
    const book ={
      "bookTitle": bookTitle,
      "authorName": authorName,
      "isAvailable": true    
    };
    console.log(book);
    this.http.post(`${this.uri}/api/books`, book).subscribe(response=> console.log(response));
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
    this.http.post(`${this.uri}/api/gbbooks`, gBBook).subscribe(response=>console.log(response));
  }
  getGBBooks(){
    return this.http.get(`${this.uri}/api/gbbooks`);
  }
  getComments(){
    return this.http.get(`${this.uri}/api/gbbooks/1/comments`);
  }
  postComments(bookId: number, name: string, comment: string){
    const comments={
      
      "name": name,
      "comment": comment,
    };
    console.log(comments);
    this.http.post(`${this.uri}/api/gbbooks/${bookId}/comments`, comments).subscribe(response=>console.log(response));
  }
}
