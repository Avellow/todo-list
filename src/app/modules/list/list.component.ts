import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Output } from '@angular/core';
import { ITask, StatusFilter, TaskService, TaskStatus } from 'src/app/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  
  constructor(public taskService: TaskService, private cdr: ChangeDetectorRef) {}

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
