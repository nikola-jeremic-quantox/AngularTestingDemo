import { Component } from '@angular/core';
import { MockDataService } from './services/mock-data/mock-data.service';
import { HttpDataService } from './services/http-data/http-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing-app';
  userList$ = this.mockDataService.getUsers();
  todo$ = this.httpDataService.getTodo();

  constructor(
    private mockDataService: MockDataService,
    private httpDataService: HttpDataService
    ) {
  }

}
