import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { Route } from './route.model';

export interface ColumnItem {
    title: string;
    sortOrder: NzTableSortOrder | null;
    sortFn: NzTableSortFn<Route> | null;
    sortDirections: NzTableSortOrder[];
  }