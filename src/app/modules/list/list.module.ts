import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TaskModule } from '../task/task.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TaskModule,
  ],
  exports: [ListComponent]
})
export class ListModule { }
