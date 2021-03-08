import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/";
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'})

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees`);
  }
  createEmployee(employee : Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}/employees/new` ,employee,{headers: this.headers});
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/employees/new1/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/employees/${id}`, employee);
  }
  deleteEmployee(id: number): Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/employees/${id}`);
  }
}
