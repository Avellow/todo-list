import { Component, Output } from '@angular/core';
import { IFilter, ITask, StatusFilter, TaskService } from 'src/app/services/task.service';

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

  handleTaskCheck(task: ITask): void {
    task.status == 'done' 
      ? this.taskService.changeStatus(task, 'common')
      : this.taskService.changeStatus(task, 'done')
  }

  handleTaskAdd(task: ITask): void {
    this.taskService.addTask(task);
  }

  filterByDescription(desc: string) {
    this.taskService.changeFilter({ byDescription: desc });
  }

  filterByStatus(status: StatusFilter) {
    this.taskService.changeFilter({ byStatus: status });
  }
}
