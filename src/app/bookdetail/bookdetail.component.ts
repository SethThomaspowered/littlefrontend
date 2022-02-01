import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent  implements OnInit {

  gBBook: any;
  gBBookBacks: any;
  constructor(private route: ActivatedRoute, private backend: BackendService) { }
  findGBBooks(){
    this.backend.getGBBooks().subscribe(response => {
      console.log(response);
      return this.gBBookBacks= response});
  }
  ngOnInit(): void {
    this.findGBBooks();
    this.route.paramMap.subscribe(params => {
      
        let paramId: string = params.get("id") || "";
        return this.gBBook.id === parseInt(paramId);
     
    });
  }

}
