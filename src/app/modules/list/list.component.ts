import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  ITask,
  StatusFilter,
  TaskService,
  TaskStatus
} from 'src/app/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  isLoading = false;

  constructor(public taskService: TaskService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.taskService
      .loadTasks()
      .subscribe({
        next: () => { this.isLoading = false; this.cdr.detectChanges() },
        error: (e) => { alert(JSON.stringify(e)); }
      })
  }

  remove(taskToRemove: ITask) {
    this.taskService.removeTask(taskToRemove);
  }

  handleChangeStatus(task: ITask, status: TaskStatus): void {
    task.status == status
      ? this.taskService.changeStatus(task, 'common')
      : this.taskService.changeStatus(task, status)
  }

  handleTaskAdd(task: ITask): void {
    this.taskService.addTask(task);
  }

  filterByDescription(desc: string): void {
    this.taskService.filter.byDescription = desc;
    this.cdr.detectChanges();
  }

  filterByStatus(status: StatusFilter): void {
    this.taskService.filter.byStatus = status;
    this.cdr.detectChanges();
  }
}
