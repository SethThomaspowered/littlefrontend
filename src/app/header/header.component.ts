import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentId: any;
  id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentId= this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.currentId);
  }

}
