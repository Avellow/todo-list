import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { TaskModule } from '../task/task.module';
import { TaskAddingModule } from '../task-adding/task-adding.module';
import { SearchModule } from '../search/search.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    TaskModule,
    TaskAddingModule,
    SearchModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
