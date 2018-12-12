import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  res:any;
  res1:any;
  constructor(private http: HttpClient) { 

  }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.res=data;
      this.res1=null;
      //console.log(data);
    });
  }
  
  filter(info){
    this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+info.id).subscribe(data => {
      this.res=data;
      this.res1=null;
      //console.log(data);
    });
  }

  showComments(event){
    this.http.get('https://jsonplaceholder.typicode.com/posts/'+event.target.value+'/comments').subscribe(data => {
      this.res=null;
      this.res1=data;
      //console.log(data);
    });
  }
}
