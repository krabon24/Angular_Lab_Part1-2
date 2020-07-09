import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() todoitem: TodoItem;
  @Output() remove = new EventEmitter<TodoItem>();

  ngOnInit(): void {
  }

  removeTask() {
    console.log("clicked");
    this.remove.emit(this.todoitem);
  }

}
