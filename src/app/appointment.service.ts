import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './model/appointement';
import { Observable } from 'rxjs';
import { Patient } from './model/patients';
import { Physician } from './model/physician';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:8080/api/appointment';

  constructor(private http: HttpClient) {}

  addAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(`${this.apiUrl}`, appointment);
  }
  
  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }
  getPatientByAppointmentId(appointmentId: number): Observable<Patient> {
    const url = `${this.apiUrl}/patient/${appointmentId}`;
    const emptyBody = {}; 
    return this.http.get<Patient>(url, emptyBody);
  }
  getPhysicianByAppointmentId(appointmentId: number): Observable<Physician> {
    const url = `${this.apiUrl}/physician/${appointmentId}`;
    return this.http.get<Physician>(url);
  }
  
}
