import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './model/department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8080/api/department';

  constructor(private http: HttpClient) { }

  addDepartment(department: Department): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, department);
  }

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}`);
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }
}
