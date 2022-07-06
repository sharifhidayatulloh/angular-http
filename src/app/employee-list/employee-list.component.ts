import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any = [
    // {id: 1, name: 'Sharif', age: 27},
    // {id: 2, name: 'Nizar', age: 26},
    // {id: 3, name: 'Bara', age: 25},
    // {id: 1, name: 'Reza', age: 30},
  ]

  public errorMsg: any;

  constructor(
    private _employeeService: EmployeeService
  ) { }

  async ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(
      data => {
        this.employees = data;
      }, error => {
        this.errorMsg = error;
      }
    )
  }

}
