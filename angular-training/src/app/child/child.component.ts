import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() cardData:any

@Output() deleteCard = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
getId(id){

this.deleteCard.emit(id)
}
}
