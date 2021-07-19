import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
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
    private modalService: NgbModal,
    private httpClient: HttpClient
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
  // remove(){
  //   this.users.pop();
  // }

  edit(user: User) {
    const modalRef = this.modalService.open(UserFormComponent);
    modalRef.componentInstance.user = user;
    modalRef.result
      .then((user) => {
        const userIndex = this.users.findIndex((x) => x.id === user.id);
        this.users[userIndex] = user;
      });
  }

  delete(user: User) {
    // const modalRef = this.modalService.open(UserDeleteComponent);
    // modalRef.componentInstance.user = user;
    // modalRef.result
      
        this.users = this.users.filter((x) => x.id !== user.id);
      
  }

}
