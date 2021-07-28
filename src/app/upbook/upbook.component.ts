import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../books/books.model';

@Component({
  selector: 'app-upbook',
  templateUrl: './upbook.component.html',
  styleUrls: ['./upbook.component.css']
})
export class UpbookComponent implements OnInit {
bookid:any
  constructor(public bookService:BookService,public router:Router) { }
  bookItem=new BookModel("","","","");
  ngOnInit(): void {
    this.bookid = localStorage.getItem("bookId");
    this.bookService.getBook(this.bookid).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
}

  editBook()
  {
    this.bookService.editBook(this.bookItem)   
      alert("Update");
      this.router.navigate(['']);
  }

}
