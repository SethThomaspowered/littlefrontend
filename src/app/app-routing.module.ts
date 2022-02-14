import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchGBComponent } from './search-gb/search-gb.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: "library/:id", component: LibraryComponent},
  //Path to description and comments for a particular book. In the future I would like to add multiple libraries.
  { path: "library/:id/books/:id", component: BookdetailComponent},
  //Path for adminstrative tasks like adding books to library.
  { path: "hippo", component: SearchGBComponent},
  // This is a catch all path that leads to 404 page, if a page can not be found.
  { path: "**", pathMatch: 'full', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
