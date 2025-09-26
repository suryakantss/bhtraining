import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  @Output()
  private comment:EventEmitter<string> = new EventEmitter();
  public add(cmt:HTMLInputElement){
    this.comment.emit(cmt.value);
  }
}
