import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentId: any;
  id: any;
  libraries: any;
  getLibraries(){
    this.backend.getLibraries().subscribe(response => {
      console.log(response);
      return this.libraries= response});

  }
  constructor(private route: ActivatedRoute, private backend: BackendService) { }

  ngOnInit(): void {
    this.currentId= this.route.snapshot.paramMap.get('id');
    this.id = parseInt(this.currentId);
    this.getLibraries();
  }

}
