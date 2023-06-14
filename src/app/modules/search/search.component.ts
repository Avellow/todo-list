import { Component, EventEmitter, Output, Input } from '@angular/core';
import { StatusFilter } from 'src/app/services/task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() filterByDescription = new EventEmitter<string>;
  @Output() filterByStatus = new EventEmitter<StatusFilter>;
  
  descriptionFilter: string = '';
  statusFilter: StatusFilter = 'all';

  changeStatusFilter(status: StatusFilter) {
    this.statusFilter = status;
    this.filterByStatus.emit(status);
  }
}
