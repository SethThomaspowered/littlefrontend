import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  newBookTitle: string = "";
  newAuthorName: string = "";
  

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
  }
  addBook(booktitle: string, author: string){
    this.backend.addBook(booktitle, author)
  }
}
