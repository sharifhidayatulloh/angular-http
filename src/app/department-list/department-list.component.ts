import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    { "id": 1, "name": "IT & Service"},
    { "id": 2, "name": "Human Capital Development"},
    { "id": 3, "name": "Finance & Accounting"},
    { "id": 4, "name": "General Affairs"},
    { "id": 5, "name": "Engineering"},
    { "id": 6, "name": "Quality Assurance"},
    { "id": 7, "name": "Production"},

  ]

  public selectedId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // let strIds: string = params.get('id') as string;
      // let arrIds: any = strIds.split(',').map((x: string) => parseInt(x));
      // console.log(arrIds);
      let id = parseInt(params.get('id') as string);
      this.selectedId = id;
    })
  }

  onSelect(department: any) {
    // this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.activatedRoute});
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }

}
