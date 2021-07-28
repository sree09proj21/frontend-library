import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/author.model';
@Component({
  selector: 'app-upauthor',
  templateUrl: './upauthor.component.html',
  styleUrls: ['./upauthor.component.css']
})
export class UpauthorComponent implements OnInit {
  authorid:any
  constructor(public authorService:AuthorService,public router:Router) { }
  authorItem=new AuthorModel("","","");
  ngOnInit(): void {
    this.authorid = localStorage.getItem("authorId");
    this.authorService.getAuthor(this.authorid).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }

  editAuthor()
  {
    this.authorService.editAuthor(this.authorItem)   
      alert("Update");
      this.router.navigate(['authors']);
  }

}
