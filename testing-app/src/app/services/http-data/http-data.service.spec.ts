import { TestBed } from '@angular/core/testing';
import { HttpDataService } from './http-data.service';


describe('MockDataService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpDataService = TestBed.get(HttpDataService);
    expect(service).toBeTruthy();
  });
});
