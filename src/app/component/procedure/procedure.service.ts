import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Procedure } from '../../model/procedure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  private baseUrl = 'http://localhost:8080/api/procedure'; 

  constructor(private http: HttpClient) {}

  addProcedure(procedure: Procedure): Observable<string> {
    return this.http.post<string>(this.baseUrl, procedure);
  }

  getAllProcedures(): Observable<Procedure[]> {
    return this.http.get<Procedure[]>(this.baseUrl);
  }

  getCostById(id: number): Observable<Procedure> {
    const url = `${this. baseUrl}/cost/${id}`;
    return this.http.get<Procedure>(url);
  }

  getCostByName(name: string): Observable<Procedure> {
    return this.http.get<Procedure>(`${this.baseUrl}/api/procedure/cost1/${name}`);
  }

  updateCostById(id: number, procedure: Procedure): Observable<Procedure> {
    return this.http.put<Procedure>(`${this.baseUrl}/api/procedure/cost/id/${id}`, procedure);
  }

  updateNameById(id: number, procedure: Procedure): Observable<Procedure> {
    return this.http.put<Procedure>(`${this.baseUrl}/api/procedure/name/${id}`, procedure);
  }
}
