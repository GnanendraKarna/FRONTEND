import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Physician } from '../model/physician';
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

  updatePosition(empid: number, physician: Physician): Observable<Physician> {
    return this.http.put<Physician>(`${this.apiUrl}/update/position/${empid}`, physician);
  }

  updateName(empid: number, physician: Physician): Observable<Physician> {
    return this.http.put<Physician>(`${this.apiUrl}/update/name/${empid}`, physician);
  }

  updateSsn(empid: number, physician: Physician): Observable<Physician> {
    return this.http.put<Physician>(`${this.apiUrl}/update/ssn/${empid}`, physician);
  }


  
}
