import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
//Declare a variable before the constructor for hold book data that get from the API.
book = {};
//Inject above modules to the constructor.
  constructor(private route: ActivatedRoute, private api: ApiService,
    private router: Router) { }

  ngOnInit() {
    //Call that function when the component is initiated.
    this.getBookDetails(this.route.snapshot.params['id']);
    
  }
//Add a function for getting Book data from the API.
getBookDetails(id) {
  this.api.getBook(id)
    .subscribe(data => {
      console.log(data);
      this.book = data;
    });
}
//For Deleting a book
deleteBook(id) {
  this.api.deleteBook(id)
    .subscribe(res => {
        this.router.navigate(['/books']);
      }, (err) => {
        console.log(err);
      }
    );
}
}
