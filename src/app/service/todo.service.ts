
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDo } from '../model/todo';
import { AuthService } from '../service/auth.service';
import * as firebase from 'firebase/app';
import Datasnapshot = firebase.database.DataSnapshot;
import { $$ } from 'protractor';



@Injectable()
export class TodoService {

  todo: ToDo[] = [];
  ToDoSubject = new Subject<ToDo[]>();

  constructor(public AuthS : AuthService) {
    this.getToDo();
}
  emitToDo() {
    this.ToDoSubject.next(this.todo);
  }
  saveToDo() {
   firebase.database().ref(`${this.AuthS.userData.uid}`).set(this.todo);
  }
  getToDo() {
    firebase.database().ref(`${this.AuthS.userData.uid}`)
      .on('value', (data: Datasnapshot) => {
          this.todo = data.val() ? data.val() : [];
          this.emitToDo();
        }
      );
  }
  createNewToDo(newToDo: ToDo) {
    this.todo.push(newToDo);
    this.saveToDo();
    this.emitToDo();
  }

  removeToDo(ToDo: ToDo) {
    const ToDoIndexToRemove = this.todo.findIndex(
      (toDoEl) => {
        if(toDoEl === ToDo) {
          return true;
        }
      }
    );
    this.todo.splice(ToDoIndexToRemove, 1);
    this.saveToDo();
    this.emitToDo();
}

}