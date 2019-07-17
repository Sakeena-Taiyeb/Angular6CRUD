import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  //Add a variable for hold books list before the constructor.
  books: any;
  //Declare the variables of Angular Material Table Data Source after the books variable.

displayedColumns = ['isbn', 'title', 'author'];
dataSource = new BookDataSource(this.api);
  
  constructor(private api: ApiService) { }

  //Modify the `ngOnInit` function to get book list immediately.
  ngOnInit() {
    this.api.getBooks()
    .subscribe(res => {
      console.log(res);
      this.books = res;
    }, err => {
      console.log(err);
    });
  }
}
  export class BookDataSource extends DataSource<any> {
    constructor(private api: ApiService) {
      super()
    }
  
    connect() {
      return this.api.getBooks();
    }
  
    disconnect() {
  
    }
  }

