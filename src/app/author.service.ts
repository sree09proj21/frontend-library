import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(public http:HttpClient) { }
  getAuthors()
  {
    return this.http.get("http://localhost:8000/authors");
  }
  getAuthor(id:any)
  {
    return this.http.get("http://localhost:8000/author/"+id);
  }
  newAuthor(item:any)
    {
  return this.http.post("http://localhost:8000/addauthor",{"author":item})
  .subscribe(data=>{console.log(data)})
    }
  
    editAuthor(author:any)
    {
      return this.http.post("http://localhost:8000/updateauthor",author)
      .subscribe(data =>{console.log(data)})
    }
  
    deleteAuthor(id:any)
    {
      return this.http.get("http://localhost:8000/removeauthor/"+id)
    }
  

}
