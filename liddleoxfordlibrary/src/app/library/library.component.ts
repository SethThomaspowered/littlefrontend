import { Component, OnInit } from '@angular/core';
import { BOOKS } from './books';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books= BOOKS;
  constructor() { }

  ngOnInit(): void {
  }

}
