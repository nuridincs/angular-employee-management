import { Employee } from './../../data-types/employee';
import { Component, OnInit } from '@angular/core';
import employee from '../../_files/employee.json';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  employeeDetail: Employee;
  id: number;

  constructor(
    private activedRouter: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.id = this.activedRouter.snapshot.params.id;
    console.log('~ this.id', this.id);
    this.fetchEmployeeDetail();
  }

  fetchEmployeeDetail() {
    const findEmployeeById = employee.find(emp => emp.id === this.id);
    this.employeeDetail = findEmployeeById;
  }

  back() {
    this.location.back();
  }

}
