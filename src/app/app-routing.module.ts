import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { SearchGBComponent } from './search-gb/search-gb.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: "library", component: LibraryComponent},
  { path: "library/1/books/:id", component: SearchGBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
