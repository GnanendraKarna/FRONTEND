import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Physician } from './model/physician';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhysicianService {
  private apiUrl = 'http://localhost:8080/api/physician';

  constructor(private http: HttpClient) { }

  savePhysician(physician: Physician): Observable<Physician> {
    return this.http.post<Physician>(this.apiUrl, physician);
  }

  getPhysicianByName(name: string): Observable<Physician> {
    return this.http.get<Physician>(`${this.apiUrl}/name/${name}`);
  }

  getPhysiciansByPosition(position: string): Observable<Physician[]> {
    return this.http.get<Physician[]>(`${this.apiUrl}/position/${position}`);
  }

  getPhysicianById(empid: number): Observable<Physician> {
    return this.http.get<Physician>(`${this.apiUrl}/${empid}`);
  }

  updatePosition(empId: number, position: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/position/${empId}/${position}`,{responseType:"json"});
  }

  updateName(empId: number, name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/name/${empId}/${name}`,{responseType:"json"});
  }

}
