import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { BOOKS } from './books';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  gBBookBacks: any;
  bookBacks: any;
  books= BOOKS;
  constructor(private backend: BackendService) { }

  findBooks(){
    this.backend.getBooks().subscribe(response => {
      console.log(response);
      return this.bookBacks = response});
  }
  findGBBooks(){
    this.backend.getGBBooks().subscribe(response => {
      console.log(response);
      return this.gBBookBacks= response});
  }
  ngOnInit(): void {
  //  this.findBooks();
  this.findGBBooks();
  }

}
