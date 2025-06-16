import { Component } from '@angular/core';
import { TableComponent } from "./components/table/table.component";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ColumnItem } from './shared/models/column-item.model';
import { Route } from './shared/models/route.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [TableComponent, NzLayoutModule]
})
export class AppComponent {
  
  listOfColumns: ColumnItem[] = [
    {
      title: 'Адрес назначения',
      sortOrder: null,
      sortFn: (a: Route, b: Route) => a.address.localeCompare(b.address),
      sortDirections: ['ascend', 'descend', null],
    },
    {
      title: 'Шлюз',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Route, b: Route) => a.gateway.localeCompare(b.gateway),
    },
    {
      title: 'Интерфейс',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: Route, b: Route) => a.interface.localeCompare(b.interface),
    }
  ];

  listOfRoutes: Route[] = [
    {
      uuid: "1",
      address: "0.0.0.0/16",
      mask: "0.0.0.0",
      gateway: "193.0.174.1",
      interface: "Подключение Ethernet"
    },
    {
      uuid: "2",
      address: "0.0.0.0/0",
      mask: "255.255.255.0",
      gateway: "0.0.0.0",
      interface: "Гостевая сеть"
    },
    {
      uuid: "3",
      address: "192.168.1.0/25",
      mask: "255.255.255.0",
      gateway: "0.0.0.0",
      interface: "Домашняя сеть"  
    },
    {
      uuid: "4",
      address: "193.0.174.0/24",
      mask: "255.255.255.0",
      gateway: "0.0.0.0",
      interface: "Подключение Ethernet"
    },
    {
      uuid: "5",
      address: "193.0.175.0/24",
      mask: "255.255.255.0",
      gateway: "193.0.174.10",
      interface: "Подключение Ethernet"
    },
    {
      uuid: "6",
      address: "193.0.175.128/25",
      mask: "255.255.255.128",
      gateway: "193.0.174.1",
      interface: "Подключение Ethernet"
    },
    {
      uuid: "7",
      address: "192.168.2.0/24",
      mask: "255.255.255.0",
      gateway: "0.0.0.0",
      interface: "Подключение Ethernet"
    },
    {
      uuid: "8",
      address: "10.10.10.0/24",
      mask: "255.255.255.0",
      gateway: "0.0.0.0",
      interface: "Подключение Ethernet"
    },
    {
      uuid: "9",
      address: "172.16.0.0/16",
      mask: "255.255.0.0",
      gateway: "0.0.0.0",
      interface: "Подключение Ethernet"
    },
    {
      uuid: "10",
      address: "192.168.3.0/32",
      mask: "255.255.255.0",
      gateway: "0.0.0.0",
      interface: "Подключение Ethernet"
    }
];
}
