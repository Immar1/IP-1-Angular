import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-main',
  templateUrl: './quote-main.component.html',
  styleUrls: ['./quote-main.component.css']
})
export class QuoteMainComponent implements OnInit {

    @Input() quoty!: Quote;
    @Output() isRead = new EventEmitter<boolean>();
    deleteQuote(read:boolean){
      this.isRead.emit(read);
    }
    upvote(){
      this.quoty.likes+=1;
    }
    downvote(){
      this.quoty.dislikes+=1;
    }
  
  constructor() { }

  ngOnInit(): void {
  }

}
