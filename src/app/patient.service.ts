import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './model/patients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  
  private apiUrl = 'http://localhost:8080/api/patient';

  constructor(private http: HttpClient) { }

  savePatient(patient: Patient): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}`, patient);
  }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  getPatientsByPcp(pcp: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/${pcp}`);
  }
  getInsuranceId(ssn: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/insurance/${ssn}`);
  }

  updateAddress(ssn: number, address: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/address/${ssn}/${address}`, {responseType:"text"});
  }

  updatePhone(ssn: number, phone: string): Observable<any> {
  
    //http://localhost:8080/api/patient/phone/100000004

    //return this.http.put(`${this.apiUrl}/phone/${ssn}`, { phone });
    return this.http.put(`http://localhost:8080/api/patient/phone/${ssn}/${phone}`,{responseType:"text"});
  }
}
