"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require("../../services/todo.service");
var TodoComponent = (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todos = [];
        this.todoService.getTodos()
            .map(function (res) { return res.json(); })
            .subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoComponent.prototype.addTodo = function ($event, todoText) {
        var _this = this;
        if ($event.which === 1) {
            var result;
            var newTodo = {
                text: todoText.value,
                isCompleted: false
            };
            result = this.todoService.addTodo(newTodo);
            result.subscribe(function (x) {
                _this.todos.push(newTodo);
                todoText.value = '';
            });
        }
    };
    TodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todos',
            templateUrl: 'todo.component.html',
            styleUrls: ['todo.component.css'],
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map