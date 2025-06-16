import { Component, input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ColumnItem } from '../../shared/models/column-item.model';
import { Route } from '../../shared/models/route.model';

/**
 * Table component for displaying network routes.
 * Uses ng-zorro-antd table component for rendering and sorting functionality.
 * Displays routes in a sortable table with columns for address, gateway, and interface.
 */
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  /**
   * Input property for the list of routes to display in the table.
   * Required input that must be provided by the parent component.
   */
  public routes = input.required<Route[]>();

  /**
   * Input property for the column configuration.
   * Required input that must be provided by the parent component.
   * Defines the structure and behavior of each column in the table.
   */
  public columns = input.required<ColumnItem[]>();
}
