import { Component, Output } from '@angular/core';
import { ITask, StatusFilter, TaskService, TaskStatus } from 'src/app/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  constructor(public taskService: TaskService) {}

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
    this.taskService.changeFilter({ byDescription: desc });
  }

  filterByStatus(status: StatusFilter): void {
    this.taskService.changeFilter({ byStatus: status });
  }
}
