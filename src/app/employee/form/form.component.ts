import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formEmployee: FormGroup;

  submitted = false;
  isSave = false;

  dataGroups = [
    { value: 1, label: 'Group 1' },
    { value: 2, label: 'Group 2' },
    { value: 3, label: 'Group 3' },
    { value: 4, label: 'Group 4' },
    { value: 5, label: 'Group 5' },
    { value: 6, label: 'Group 6' },
    { value: 7, label: 'Group 7' },
    { value: 8, label: 'Group 8' },
    { value: 9, label: 'Group 9' },
    { value: 10, label: 'Group 10' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formEmployee = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firtsname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthDate: ['', Validators.required],
      basicSalary: ['', Validators.required],
      status: ['', Validators.required],
      group: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  public today = new Date();

  get formErr() { return this.formEmployee.controls; }

  save() {
    this.submitted = true;
    if (this.formEmployee.invalid) {
      return;
    }
    this.router.navigateByUrl('/employee')
    console.log(this.formEmployee.value);
  }

  cancel() {
    this.location.back();
  }

}
