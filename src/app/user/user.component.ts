import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  res:any;
  res1:any;
  constructor(private http: HttpClient) { 

}
ngOnInit() {
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
    this.res=data;
    this.res1=null;
    //console.log(data);
  });
}
  
showPosts(event){
  this.http.get('https://jsonplaceholder.typicode.com/users/'+event.target.value+'/posts').subscribe(data => {
    this.res1=data;
    this.res=null;
    //console.log(data);
  });
}

removePosts(event){
  this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
    this.res=data;
    this.res1=null;
    //console.log(data);
  });
}

}
