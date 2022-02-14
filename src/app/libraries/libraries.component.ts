import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {
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
