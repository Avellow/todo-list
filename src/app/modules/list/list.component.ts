import { Component } from '@angular/core';
import { ITask, TaskService } from 'src/app/services/task.service';

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
}
