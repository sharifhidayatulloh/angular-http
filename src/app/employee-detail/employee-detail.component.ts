import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees: any = [
    // {id: 1, name: 'Sharif', age: 27},
    // {id: 2, name: 'Nizar', age: 26},
    // {id: 3, name: 'Bara', age: 25},
    // {id: 1, name: 'Reza', age: 30},
  ]

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    })
  }

}
