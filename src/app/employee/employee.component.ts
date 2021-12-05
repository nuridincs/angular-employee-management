import { Component, OnInit } from '@angular/core';
import employee from '../_files/employee.json';
import { ApiService } from './../api.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [ApiService]
})
export class EmployeeComponent implements OnInit {
  title = 'Employee';
  dtOptions: DataTables.Settings = {};
  employeeList = employee;

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  }
}
