import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TableComponent, NzLayoutModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have correct number of columns', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.listOfColumns.length).toBe(3);
  });

  it('should have correct column titles', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.listOfColumns[0].title).toBe('Адрес назначения');
    expect(app.listOfColumns[1].title).toBe('Шлюз');
    expect(app.listOfColumns[2].title).toBe('Интерфейс');
  });

  it('should have routes data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.listOfRoutes.length).toBeGreaterThan(0);
    const firstRoute = app.listOfRoutes[0];
    expect('uuid' in firstRoute).toBeTruthy();
    expect('address' in firstRoute).toBeTruthy();
    expect('gateway' in firstRoute).toBeTruthy();
    expect('interface' in firstRoute).toBeTruthy();
  });

  it('should have correct first route data', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const firstRoute = app.listOfRoutes[0];
    expect(firstRoute.uuid).toBe('1');
    expect(firstRoute.address).toBe('0.0.0.0/16');
    expect(firstRoute.gateway).toBe('193.0.174.1');
    expect(firstRoute.interface).toBe('Подключение Ethernet');
  });
});
