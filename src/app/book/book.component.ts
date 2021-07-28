import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookModel } from '../books/books.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public bookService:BookService) { }
  bookItem=new BookModel("","","","");

  ngOnInit(): void {
    let b_Id = localStorage.getItem("bookId");
    this.bookService.getBook(b_Id).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }

}
