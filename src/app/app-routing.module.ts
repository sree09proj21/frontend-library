import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { NewbookComponent } from './newbook/newbook.component';
import { UpauthorComponent } from './upauthor/upauthor.component';
import { UpbookComponent } from './upbook/upbook.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:BooksComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'book',component:BookComponent},
  {path:'author',component:AuthorComponent},
  {path:'upbook',component:UpbookComponent},
  {path:'newbook',canActivate:[AuthGuard],component:NewbookComponent},
  {path:'newauthor',canActivate:[AuthGuard],component:NewauthorComponent},
  {path:'upauthor',component:UpauthorComponent},
  {path:'login',component:LoginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
