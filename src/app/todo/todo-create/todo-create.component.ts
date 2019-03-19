import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  toDoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toDoService: TodoService,
   private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.toDoForm = this.formBuilder.group({
      title: ['', Validators.required],
    });
  }
  
  onSaveToDo() {
    const title = this.toDoForm.get('title').value;
    const newToDo = new ToDo(title);
    this.toDoService.createNewToDo(newToDo);
    this.router.navigate(['/accueil']);
  }
  onSave(){
    this.toDoService.saveToDo();
  }
}
