import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
name:string = 'mostafa saqr'
age:number


  
  constructor() { 
  
  }

  ngOnInit(): void {
    
  }

}
