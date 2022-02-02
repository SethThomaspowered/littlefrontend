import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
/* This section accesses the comments table on the backend. It allows visitors to post comments about a particular book.
 * As well as see comments left by other visitors.
 */
export class CommentComponent implements OnInit {
  comments: any;
  newName: string="";
  newComment: string="";
  @Input() book: any; 
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
    this.newName="";
    this.newComment="";
    

  }
  ngOnInit(): void {
    this.getComments();
  }

}
