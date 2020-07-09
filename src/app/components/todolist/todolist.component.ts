import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo';
import { TextAst } from '@angular/compiler';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoItems: TodoItem[] = [
    {completed: true, task: 'task 1'},
    {completed: false, task: 'task 2'},
    {completed: true, task: 'task 3'},
  ];

  filterToDoItems: TodoItem[];

  toDoItem: string;

  filterValue: string;

  ngOnInit() {
    this.filterToDoItems = this.todoItems;
  }

  addTask() {
    const todoItem: TodoItem = {
      completed: false,
      task: this.toDoItem
    };
    this.todoItems.push(todoItem);
  }

  removeTask(index: number) {
    console.log('delete');
    this.todoItems.splice(index, 1);
    this.filterItems()
  }

  completeTask(item: TodoItem) {
    console.log(item);
    item.completed = !item.completed;
  }

  filterItems() {
    console.log(this.filterValue);
    this.filterToDoItems = this.todoItems.filter(x => x.task.includes(this.filterValue))
  }

}
