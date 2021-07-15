import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { HttpErrorResponse } from '@angular/common/http';
// import { Component, Input } from '@angular/core';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-request-error',
//   templateUrl: './request-error.component.html',
//   styleUrls: ['./request-error.component.scss']
// })
// export class RequestErrorComponent {
//   @Input() error: HttpErrorResponse;
//   constructor(public activeModal: NgbActiveModal) {
//   }
// }
