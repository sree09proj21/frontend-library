import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';
import { AuthorModel } from './author.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  imageWidth:number=50;
  imageMargin:number=2;

  authors:AuthorModel[]=[]
  constructor(public authorService:AuthorService,public router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.authorService.getAuthors()
    .subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data))
    }
    )
  }

  singleAuthor(book:any)
  {
    localStorage.setItem("authorId",book._id.toString());
    this.router.navigate(['author']);
  }

 editAuthor(author:any)
 {
  localStorage.setItem("authorId",author._id.toString());
  this.router.navigate(['upauthor']);
 }
 deleteAuthor(author:any)
 {
   this.authorService.deleteAuthor(author._id)
     .subscribe((data) => {
       this.authors = this.authors.filter(p => p !== author);
     })
   }


}
