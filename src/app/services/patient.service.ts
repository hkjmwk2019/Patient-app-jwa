import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry,throwError } from 'rxjs';
import { Patient } from '../models/patient';


const patientURL ="http://localhost:5050/patient"
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }


  constructor(public httpClient: HttpClient) { }

  // Getting all the patients
  getPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(patientURL)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //Getting a single patient
  //"http://localhost:3000/product/99
  getPatient(patientId: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${patientURL}/${patientId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //Deleting a single patient
  //"http://localhost:3000/atient/99 - DELETE
  deletePatient(patientId: number): Observable<Patient> {
    return this.httpClient.delete<Patient>(`${patientURL}/${patientId}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

  //saving a single patient
  //"http://localhost:3000/patient
  savePatient(patient:Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(patientURL, patient ,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    );
  }

   //edit/update a single patient
    //Please complete this 
  //localhost:3000/patient/71 - PUT and in body we have to pass patient object
  updatePatient(patientId:number,patient:Patient): Observable<Patient> {

    return this.httpClient.put<Patient>(`${patientURL}/${patientId}`,patient ,this.httpOptions)
    .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Some Error Happened\n Error Details \nError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
