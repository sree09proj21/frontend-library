import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';
import { BookModel } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  imageWidth:number=50;
  imageMargin:number=2;

  books:BookModel[]=[]
  constructor(public bookService:BookService,public router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.bookService.getBooks()
    .subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data))
    }
    )
  }

  singleBook(book:any)
  {
    localStorage.setItem("bookId",book._id.toString());
    this.router.navigate(['book']);
  }

 editBook(book:any)
 {
  localStorage.setItem("bookId",book._id.toString());
  this.router.navigate(['upbook']);
 }
 deleteBook(book:any)
 {
   this.bookService.deleteBook(book._id)
     .subscribe((data) => {
       this.books = this.books.filter(p => p !== book);
     })
   }

}
