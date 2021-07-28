import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/author.model';
@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor(public authorService:AuthorService,public router:Router) { }
  authorItem=new AuthorModel("","","")
  ngOnInit(): void {
  }
  AddAuthor()
  {
    this.authorService.newAuthor(this.authorItem)
    this.router.navigate(['authors'])
  }

}
