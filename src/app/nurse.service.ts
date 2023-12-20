import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nurse } from './model/nurse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  private apiUrl = 'http://localhost:8080/api/nurse';

  constructor(private http: HttpClient) {}

  saveNurse(nurse: Nurse): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, nurse);
  }

  getAllNurses(): Observable<Nurse[]> {
    return this.http.get<Nurse[]>(this.apiUrl);
  }

  getNurseById(empid: number): Observable<Nurse> {
    return this.http.get<Nurse>(`${this.apiUrl}/${empid}`);
  }
  updateRegistered(empId: number, registered: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/registered/${empId}`, { registered });
  }
  updateSsn(empId: number, ssn: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/ssn/${empId}`, { ssn });
  }
  getNurseByName(name: string): Observable<Nurse> {
    return this.http.get<Nurse>(`${this.apiUrl}/byname/${name}`);
  }

}

