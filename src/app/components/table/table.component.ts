import { Component, input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ColumnItem } from '../../shared/models/column-item.model';
import { Route } from '../../shared/models/route.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  public routes = input.required<Route[]>();
  public columns = input.required<ColumnItem[]>();
}
