import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  
  @Input() task!: ITask;
  @Output() remove = new EventEmitter<ITask>;
  
}
