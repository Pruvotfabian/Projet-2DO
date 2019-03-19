import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { TodoService } from '../../service/todo.service';
import { ToDo } from '../../model/todo';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit, OnDestroy {
  toDo: ToDo[];
  toDoSubscription: Subscription;
  toDodestroy: boolean;
  constructor(private todoService: TodoService, private authService: AuthService, private router: Router) {
   
  }
  

  ngOnInit() {
  
    this.toDodestroy = false;
    this.toDoSubscription = this.todoService.ToDoSubject.subscribe(
      (todo: ToDo[]) => {
        this.toDo = todo;
      }
    );
    this.todoService.emitToDo();
  }
  
  onNewToDo() {
    this.router.navigate(['new-todo']);
  }
 
 
  onDeleteToDo(ToDo: ToDo) {
    this.toDodestroy = true;
    setTimeout((ToDo) => {
      this.toDodestroy = false;
    },2000)
    this.todoService.removeToDo(ToDo);
  }
  
  ngOnDestroy() {
    this.toDoSubscription.unsubscribe();
  }
}