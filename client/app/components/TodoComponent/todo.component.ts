import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from "../../services/todo.service";
@Component({
  moduleId    : module.id,
  selector    : 'todos',
  templateUrl : 'todo.component.html',
  styleUrls   : ['todo.component.css'],
  providers   : [ TodoService]
})

export class TodoComponent implements OnInit{
  todos: Todo [];
  constructor(private todoService : TodoService){

  }
  ngOnInit(){
    this.todos = [];
    this.todoService.getTodos()
        .map(res => res.json())
        .subscribe( todos => {
          this.todos = todos;
        });
  }

  addTodo($event, todoText){
    if($event.which === 1){
      var result;
      var newTodo = {
        text : todoText.value,
        isCompleted : false;
      };

      result = this.todoService.addTodo(newTodo);
      result.subscribe( x => {
        this.todos.push(newTodo);
        todoText.value = '';
      })
    }
  }
}
