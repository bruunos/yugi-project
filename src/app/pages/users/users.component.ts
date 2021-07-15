import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from './modals/user-form/user-form.component';
import { User } from './users.models';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];

  constructor(
    private usersService: UsersService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.usersService
      .getAll()
      .subscribe((users) => this.users = users);
  }

  add() {
    const modalRef = this.modalService.open(UserFormComponent);
    modalRef.result
      .then((user) => {
        this.users.push(user);
      });
  }
}
