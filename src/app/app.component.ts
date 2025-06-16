import { Component } from '@angular/core';
import { TableComponent } from "./components/table/table.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TableComponent, NzLayoutModule]
})
export class AppComponent {
}
