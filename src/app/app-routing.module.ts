import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

const routes: Routes = [
  { path : '', redirectTo : 'patientList', pathMatch :'full'},
  { path: 'addPatient', component: PatientAddComponent },
  { path: 'patientList', component: PatientListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
