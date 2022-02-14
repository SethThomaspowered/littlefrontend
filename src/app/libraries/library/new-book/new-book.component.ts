import { Component, OnInit, Input } from '@angular/core';

import { BackendService } from '../../../backend.service';
import { ToastService } from '../../../toast.service';
@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  newBookTitle: string = "";
  newAuthorName: string = "";
  @Input() library: any;

  constructor(private backend: BackendService, private toast: ToastService) { }

  ngOnInit(): void {
  }
  /* Adds a book for admin to review and add if in library
   * Resets newBookTitle and newAuthorName after submission
   */
  addBook(booktitle: string, author: string, libraryId: number){
    this.backend.addBook(booktitle, author, libraryId)
    this.newBookTitle="";
    this.newAuthorName="";
  }
}
