import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    ngOnInit(){
      let x = this.childData.filter((item)=> item.id != 1)
      console.log(x)
    }
childData = [
  {
    id:1,
    img:'https://via.placeholder.com/450',
    title:'mostafa',
    desc: 'e width first, then height. Height is optional: if no heig',
    url:'http://www.google.com'
  },
  {
    id: 2,
    img:'https://via.placeholder.com/450',
    title:'essam',
    desc: 'e width first, then height. Height is optional: if no heig',
    url:'http://www.yahoo.com'
  },
  {
    id: 3,
    img:'https://via.placeholder.com/450',
    title:'attia',
    desc: 'e width first, then height. Height is optional: if no heig',
    url:'http://www.facebook.com'
  },
]
userData = {
  name:'',
  url:''
}
addData(){
  let newData = {
    id:Math.random(),
    img: 'https://via.placeholder.com/450',
    title: this.userData.name,
    desc: 'e width first, then height. Height is optional: if no heig',
    url: this.userData.url
  }
  this.childData.push(newData)
}
getDataFromChild(incomingId){
  console.log('console from parent',incomingId)
  let newChildData = this.childData.filter((item) => item.id != incomingId);
  this.childData = newChildData
 
}

}
