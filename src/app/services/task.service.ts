import { Injectable } from '@angular/core';

export type TaskStatus = 'common' | 'important' | 'done';
export type StatusFilter = TaskStatus | 'all';

export interface ITask {
  status: TaskStatus;
  description: string;
}

export interface IFilter {
  byStatus: StatusFilter;
  byDescription: string;
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
  
  filter: IFilter = {
    byDescription: '',
    byStatus: 'all'
  }

  constructor() { }

  get tasks(): ITask[] {
    if (this.filter.byStatus == 'all') {
      return this
        ._tasks
        .filter(task => task.description.includes(this.filter.byDescription));
    }

    return this
      ._tasks
      .filter(task => task.description.includes(this.filter.byDescription)
        && task.status == this.filter.byStatus
      )
  }

  addTask(task: ITask): void {
    this._tasks = [...this._tasks, task];
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
