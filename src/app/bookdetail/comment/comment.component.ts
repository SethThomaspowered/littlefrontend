import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any;
  newName: string="";
  newComment: string="";
  constructor(private backend: BackendService) { }
  //This retrieves all comments from database. In the future, comments will be filtered by book. 
  getComments(){
    this.backend.getComments().subscribe(response =>{
      console.log(response);
      return this.comments=response;
    });
  }
  postComments(bookId: number, name: string, comment: string){
    this.backend.postComments(bookId, name, comment);
  }
  ngOnInit(): void {
    this.getComments();
  }

}
