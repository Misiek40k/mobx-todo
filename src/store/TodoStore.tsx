import { createContext } from 'react';
import { action, observable, computed, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  constructor() {
    makeObservable(this);
  }

  @observable todos: Todo[] = []

  @action addTodo = (todo: Todo) => {
    this.todos.push({ ...todo, id: uuidv4() });
  }

  @action toggleTodo = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }

  @action removeTodo = (id: string) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  @computed get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length,
    };
  }
}

export default createContext(new TodoStore());
