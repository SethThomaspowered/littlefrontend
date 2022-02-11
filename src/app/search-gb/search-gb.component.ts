import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-search-gb',
  templateUrl: './search-gb.component.html',
  styleUrls: ['./search-gb.component.css']
})
export class SearchGBComponent implements OnInit {
  book: string = "";
  info: any;
  title: string = "";
  description: string = "";
  image: string= "";
  googleId: string= "";
  isbn: string="";
  author: string="";
  libraryId: number=1;
  editions: any;
  constructor(private http: HttpClient, private backend: BackendService) { }
  findBook(book: string){
    this.http
    .get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    .subscribe((response) => {
      console.log(response);
      this.info = response;
      this.title = this.info.items[0].volumeInfo.title;
      this.description = this.info.items[0].volumeInfo.description;
      this.image = this.info.items[0].volumeInfo.imageLinks.smallThumbnail;
      this.googleId = this.info.items[0].id;
      this.isbn=this.info.items[0].volumeInfo.industryIdentifiers[1];
      this.author=this.info.items[0].volumeInfo.authors[0];
    });

  }
  addGBBook(title: string, description: string, image: string, googleId: string, author: string, libraryId: number){
    if(description.length >= 2000){
      description = description.substring(0,1999);
    }
    this.backend.addGBBook(title, description, image, googleId, author, libraryId);
    this.book="";
  }
  getBooks(){
    this.backend.getBooks().subscribe(response=>{
      console.log(response);
      return this.editions=response;
    })
  }
  checkoutBook(id: number, checkout: boolean){
    this.backend.checkoutBook(id, checkout).subscribe(response=>{
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.getBooks();
  }

}
