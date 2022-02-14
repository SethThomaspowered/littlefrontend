import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LibraryComponent } from './libraries/library/library.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BackendService } from './backend.service';
import { NewBookComponent } from './new-book/new-book.component';
import { SearchGBComponent } from './search-gb/search-gb.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { CommentComponent } from './bookdetail/comment/comment.component';
import { LibrariesComponent } from './libraries/libraries.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LibraryComponent,
    HomeComponent,
    NewBookComponent,
    SearchGBComponent,
    NotfoundComponent,
    BookdetailComponent,
    CommentComponent,
    LibrariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
