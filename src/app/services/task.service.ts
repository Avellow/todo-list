import { Injectable } from '@angular/core';

export type TaskStatus = 'common' | 'important' | 'done';

export interface ITask {
  status: TaskStatus;
  description: string;
}

const initialTasks: ITask[] = [
  { status: 'common', description: 'first task'},
  { status: 'done', description: 'second task'},
  { status: 'important', description: 'third task'},
] 

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: ITask[] = initialTasks;

  constructor() { }

  get tasks(): ITask[] {
    return this._tasks;
  }

  addTask(task: ITask): void {
    this._tasks.push(task);
  }

  removeTask(taskToRemove: ITask): void {
    this._tasks = this._tasks.filter(task => task !== taskToRemove);
  }

  changeStatus(taskToChange: ITask, newStatus: TaskStatus): void {
    const task = this._tasks.find(task => task == taskToChange);

    if (task) {
      task.status = newStatus;
    }
  }
}
