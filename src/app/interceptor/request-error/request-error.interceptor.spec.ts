import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestErrorInterceptor } from './request-error.interceptor';

describe('RequestErrorInterceptor', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let modalService: NgbModal;

  beforeEach(() => {
      TestBed.configureTestingModule({
          providers: [
              { provide: NgbModal },
              {
                  provide: HTTP_INTERCEPTORS,
                  useClass: RequestErrorInterceptor,
                  multi: true,
              },
          ],
          imports: [HttpClientTestingModule],
      });

      httpClient = TestBed.inject(HttpClient);
      httpMock = TestBed.inject(HttpTestingController);

      modalService = TestBed.inject(NgbModal);
  });

});
