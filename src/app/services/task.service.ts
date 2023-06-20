import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber, Subscription, catchError, finalize, map, throwError } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _tasks: ITask[] = [];
  public isLoading = false;

  filter: IFilter = {
    byDescription: '',
    byStatus: 'all'
  }

  constructor(private http: HttpClient) { }

  loadTasks() {
    return this.http.get<ITask[]>('../../assets/todo-list.json')
      .pipe(
        catchError((errorRes: HttpErrorResponse) => throwError(() => errorRes.message)),
        map((data) => this._tasks = data),
      )
  }

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
