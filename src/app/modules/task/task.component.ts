import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ITask {
  status: 'common' | 'important' | 'done';
  description: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  
  @Input() task!: ITask;
  @Output() remove = new EventEmitter<ITask>;
  
}
