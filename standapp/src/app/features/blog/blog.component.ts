import { Component } from '@angular/core';
import { CommentComponent } from "../comment/comment.component";

@Component({
  selector: 'app-blog',
  imports: [CommentComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  comments:Array<string> = ["Nice Article","Good"];

  public handle(data:string){
      this.comments.push(data);
  }
}
