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
  addBook(bookTitle: string, authorName: string, libraryId:number){
    const book ={
      "bookTitle": bookTitle,
      "authorName": authorName,
      "isAvailable": true,
      "libraryId": libraryId
    };
    console.log(book);
    this.http.post(`${this.uri}/api/books`, book).subscribe(response=> console.log(response));
    alert("Book has been sent to Library Steward");
  }
  addGBBook(title: string, description: string, image: string, googleId: string, author: string, libraryId: number){
    const gBBook ={
      "title": title,
      "description": description,
      "image": image,
      "googleId": googleId,
      "author": author,
      "libraryId": libraryId,
    };
    console.log(gBBook);
    this.http.post(`${this.uri}/api/gbbooks`, gBBook).subscribe(response=>console.log(response));
  }
  getGBBooks(){
    return this.http.get(`${this.uri}/api/gbbooks`);
  }

  checkoutGBBook(id: number, checkout: boolean){
    const checkedOut={"checkedOut": checkout}
  return this.http.put(`${this.uri}/api/gbbooks/${id}`, checkedOut);
}
  checkoutBook(id: number, checkout: boolean){
  const checkedOut={"available": checkout}
return this.http.put(`${this.uri}/api/books/${id}`, checkedOut);
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
  getLibrary(libraryId: number){return this.http.get(`${this.uri}/api/library/${libraryId}`)};
  getLibraries(){return this.http.get(`${this.uri}/api/library`)};
}
