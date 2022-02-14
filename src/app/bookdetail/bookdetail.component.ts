import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BackendService } from '../backend.service';
import { BOOKS } from '../libraries/library/books';
import { Book } from '../book.model';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent  implements OnInit {
  id: number|undefined;
  gBBook: any;
  gBBookBacks: any;
  books= BOOKS;
  book: any;

  constructor(private route: ActivatedRoute, private backend: BackendService) { }
  findGBBooks(){
    this.backend.getGBBooks().subscribe(response => {
      console.log(response);
      this.route.paramMap.subscribe(params => {
        this.book = BOOKS.find(book => {
          let paramId: string = params.get("id") || "";
          return book.id === parseInt(paramId);
        });
      });
      this.gBBookBacks= response});
  }
  ngOnInit(): void {
    this.findGBBooks();



  }

}
