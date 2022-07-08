import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.departmentId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') as string);
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id') as string);
      this.departmentId = id;
    })
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/departments', previousId]);
    this.router.navigate(['../', previousId], {relativeTo: this.activatedRoute});
  }

  goNext() {
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/departments', nextId]);
    this.router.navigate(['../', nextId], {relativeTo: this.activatedRoute});
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.activatedRoute});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.activatedRoute});
  }

}
