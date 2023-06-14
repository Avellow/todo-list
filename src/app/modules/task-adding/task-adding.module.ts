import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskAddingComponent } from './task-adding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskAddingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TaskAddingComponent]
})
export class TaskAddingModule { }
