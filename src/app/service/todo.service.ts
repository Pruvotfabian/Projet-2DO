
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToDo } from '../model/todo';
import { AuthService } from '../service/auth.service';
import Datasnapshot = firebase.database.DataSnapshot;



@Injectable()

export class TodoService {

  todo: ToDo[] = [];
  ToDoSubject = new Subject<ToDo[]>();
  router: any;

 

  constructor(public AuthS : AuthService, public ad: AngularFireDatabase) {
    this.getToDo();
}

  emitToDo() {
    this.ToDoSubject.next(this.todo);
  }
  saveToDo() {
   this.ad.database.ref(`${this.AuthS.userData.uid}`).set(this.todo);
  }
  getToDo() {
    this.ad.database.ref(`${this.AuthS.userData.uid}`)
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
