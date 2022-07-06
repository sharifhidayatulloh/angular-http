import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(
    private http: HttpClient
  ) { }


  // getEmployees() {
  //   return [
  //     {id: 1, name: 'Sharif', age: 27},
  //     {id: 2, name: 'Nizar', age: 26},
  //     {id: 3, name: 'Bara', age: 25},
  //     {id: 4, name: 'Reza', age: 31},
  //     {id: 5, name: 'Samsi', age: 36},
  //     {id: 6, name: 'David', age: 35},
  //   ]
  // }
  // getEmployees(): Observable<IEmployee[]> {
  //   return this.http.get<IEmployee[]>(this._url)
  //     // .pipe(catchError(this.errorHttpHandler));
  // }

  getEmployees() {
    return this.http.get(this._url).pipe(
      catchError(this.errorHttpHandler)
    );
  }

  errorHttpHandler(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
