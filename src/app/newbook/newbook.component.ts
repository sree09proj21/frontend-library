import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/books.model';


@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {

  constructor(public bookService:BookService,public router:Router) { }
  bookItem=new BookModel("","","","")

  ngOnInit(): void {
  }
  AddBook()
  {
    this.bookService.newBook(this.bookItem)
    this.router.navigate([''])
  }
}
