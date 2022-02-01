import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { BOOKS } from '../library/books';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent  implements OnInit {

  gBBook: any;
  gBBookBacks: any;
  books= BOOKS;
  constructor(private route: ActivatedRoute, private backend: BackendService) { }
  findGBBooks(){
    this.backend.getGBBooks().subscribe(response => {
      console.log(response);
      return this.gBBookBacks= response});
  }
  ngOnInit(): void {
    this.findGBBooks();
    this.route.paramMap.subscribe(params => {
      this.gBBook = BOOKS.find(book =>{
        let paramId: string = params.get("id") || "";
        return  book.id === parseInt(paramId);
      });
    });
  }

}
