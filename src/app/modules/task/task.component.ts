import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ITask, TaskStatus } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  
  @Input() task!: ITask;
  
  @Output() check = new EventEmitter<ITask>;
  @Output() changeImportance = new EventEmitter<TaskStatus>;
}
