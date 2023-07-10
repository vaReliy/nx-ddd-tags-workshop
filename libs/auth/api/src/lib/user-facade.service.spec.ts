/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { UserFacadeService } from './user-facade.service';

describe('Service: UserFacade', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFacadeService],
    });
  });

  it('should ...', inject([UserFacadeService], (service: UserFacadeService) => {
    expect(service).toBeTruthy();
  }));
});
