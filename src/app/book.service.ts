import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public http:HttpClient) { }
getBooks()
{
  return this.http.get("http://localhost:8000/books");
}
getBook(id:any)
{
  return this.http.get("http://localhost:8000/"+id);
}
newBook(item:any)
  {
return this.http.post("http://localhost:8000/addbook",{"book":item})
.subscribe(data=>{console.log(data)})
  }

  editBook(book:any)
  {
    return this.http.post("http://localhost:8000/updatebook",book)
    .subscribe(data =>{console.log(data)})
  }

  deleteBook(id:any)
  {
    return this.http.get("http://localhost:8000/removebook/"+id)
  }

}
