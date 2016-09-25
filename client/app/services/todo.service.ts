import  { Injectable } from "@angular/core";
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class TodoService {
  constructor(private http: Http){

  }
  addTodo(todo){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("/api/v1/todo",JSON.stringify(todo),{headers : headers})
    .map(res => res.json());
  }
  updateTodo(){

  }

  getTodo(){

  }

  getTodos(){
    return this.http.get("/api/v1/todos");
  }
  deleteTodo(){

  }

}
