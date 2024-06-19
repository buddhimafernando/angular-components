import { Component } from '@angular/core';

interface User {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  users: User[] = [
    {value: 'Get', viewValue: 'View All Users'},
    {value: 'Put', viewValue: 'Update User'},
    {value: 'Post', viewValue: 'Add a user'},
    {value: 'Delete', viewValue: 'Delete user'}
  ];
}
