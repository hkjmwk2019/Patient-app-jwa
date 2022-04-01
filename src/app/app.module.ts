import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppointmentsComponent } from './compnents/appointments/appointments.component';
import { DoctorInfoComponent } from './compnents/doctor-info/doctor-info.component';
import { DoctorsComponent } from './compnents/doctors/doctors.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientAddComponent,
    AppointmentsComponent,
    DoctorInfoComponent,
    DoctorsComponent,
    ScheduleAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule , // add into the application
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
