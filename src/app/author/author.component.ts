import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/author.model';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(public authorService:AuthorService) { }
  authorItem=new AuthorModel("","","");
  ngOnInit(): void {
    let a_Id = localStorage.getItem("authorId");
    this.authorService.getAuthor(a_Id).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }
  }


