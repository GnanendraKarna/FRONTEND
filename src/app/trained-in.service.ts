import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainedIn } from './model/trainedIn';
import { Observable } from 'rxjs';
import { Procedure } from './model/procedure';
import { Physician } from './model/physician';

@Injectable({
  providedIn: 'root'
})
export class TrainedInService {

  private baseUrl = 'http://localhost:8080/api/trained_in';

  constructor(private http: HttpClient) {}

  addCertificate(trainedIn: TrainedIn): Observable<string> {
    const url = `${this.baseUrl}`;
    return this.http.post<string>(url, trainedIn);
  }

  

  getTreatmentForPhysician(physicianId: number): Observable<Procedure[]> {
    const url = `${this.baseUrl}/treatment/physicianid?id=${physicianId}`;
    return this.http.get<Procedure[]>(url);
  }

  getPhysician(procedureId: number): Observable<Physician[]> {
    const url = `${this.baseUrl}/physician/${procedureId}`;
    return this.http.get<Physician[]>(url);
  }
  getProcedureByCertification(): Observable<TrainedIn[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<TrainedIn[]>(url);
  }

  

}
