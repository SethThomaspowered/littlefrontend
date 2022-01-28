import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { BOOKS } from './books';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  bookBacks: any;
  books= BOOKS;
  constructor(private backend: BackendService) { }

  findBooks(){
    this.backend.getBooks().subscribe(response => {
      console.log(response);
      return this.bookBacks = response});
  }
  ngOnInit(): void {
   this.findBooks();
  }

}
