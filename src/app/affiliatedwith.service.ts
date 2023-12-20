import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AffiliatedWith, Department, Physician } from './model/affiliated';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffiliatedwithService {

  private baseUrl = 'http://localhost:8080/api/affiliated_with';

  constructor(private http: HttpClient) {}

  addAffiliation(affiliation: AffiliatedWith): Observable<string> {
    const url = `${this.baseUrl}/post`;
    return this.http.post<string>(url, affiliation);
  }

  getPhysiciansByDepartment(departmentId: number): Observable<Physician[]> {
    const url = `${this.baseUrl}/physicians/${departmentId}`;
    return this.http.get<Physician[]>(url);
  }

  getDepartmentsByPhysician(physicianId: number): Observable<Department[]> {
    const url = `${this.baseUrl}/department/${physicianId}`;
    return this.http.get<Department[]>(url);
  }

  getPhysicianCount(deptId: number): Observable<number> { 
    const url = `${this.baseUrl}/countphysician/${deptId}`; 
    return this.http.get<number>(url); 
  }

  getPrimaryAffiliationByPhysician(physicianId: number): Observable<boolean> {
    const url = `${this.baseUrl}/primary/${physicianId}`;
    return this.http.get<boolean>(url);
  }

  updatePrimaryAffiliation(physicianId: number, primaryAffiliation: boolean): Observable<boolean> {
    const url = `${this.baseUrl}/primary/${physicianId}/${primaryAffiliation}`;
    return this.http.put<boolean>(url, null);
  }
}
