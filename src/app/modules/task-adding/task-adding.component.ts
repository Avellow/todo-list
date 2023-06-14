import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITask, TaskStatus } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-adding',
  templateUrl: './task-adding.component.html',
  styleUrls: ['./task-adding.component.scss']
})
export class TaskAddingComponent {
  
  @Output() addTask = new EventEmitter<ITask>

  submitAdding(form: NgForm): void {
    if(!form.valid) {
      return;
    }

    const task: ITask = {
      status: form.value.status as TaskStatus,
      description: form.value.description,
    }

    this.addTask.emit(task);
    form.resetForm();
  }
}
