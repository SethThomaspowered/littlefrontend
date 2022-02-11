import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  library: any;
  currentId: any;
  id: any;
  constructor(private backend: BackendService, private route: ActivatedRoute) { }

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
  getLibrary(id: number){
    this.backend.getLibrary(id).subscribe(response =>{
      console.log(response);
    return this.library=response})
  }
  checkoutGBBook(id: number, checkout: boolean){
    this.backend.checkoutGBBook(id, checkout).subscribe(response=>{
      console.log(response);
    });
  }
  ngOnInit(): void {
  //  this.findBooks();
  this.currentId= this.route.snapshot.paramMap.get('id');
  this.id = parseInt(this.currentId);
  this.getLibrary(this.id);
  this.findGBBooks();

}

}
