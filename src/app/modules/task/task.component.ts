import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask, TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  
  @Input() task!: ITask;
  @Output() remove = new EventEmitter<ITask>;

  constructor(public taskService: TaskService) {}

  handleCheck():void {
    this.task.status == 'done' 
      ? this.taskService.changeStatus(this.task, 'common')
      : this.taskService.changeStatus(this.task, 'done')
  }
  
}
