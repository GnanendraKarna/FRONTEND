import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NurseComponent } from './nurse/nurse.component';
import { PatientComponent } from './component/patient/patient.component';
import { AddpatientComponent } from './component/addpatient/addpatient.component';
import { FetchpatientComponent } from './component/fetchpatient/fetchpatient.component';
import { ListofpatientComponent } from './component/listofpatient/listofpatient.component';
import { AddphysicianComponent } from './component/addphysician/addphysician.component';
import { FetchphysicianComponent } from './component/fetchphysician/fetchphysician.component';
import { ListofphysicianComponent } from './component/listofphysician/listofphysician.component';
import { PhysicianComponent } from './component/physician/physician.component';
import { DepartmentComponent } from './component/department/department.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { AddappointmentComponent } from './component/addappointment/addappointment.component';
import { AllAppointmentsComponent } from './component/all-appointments/all-appointments.component';
import { AdddepartmentComponent } from './component/adddepartment/adddepartment.component';
import { DepartmentlistComponent } from './component/departmentlist/departmentlist.component';
import { FetchdepartmentidComponent } from './component/fetchdepartmentid/fetchdepartmentid.component';
import { TrmtdonebyparticularphysnComponent } from './component/trmtdonebyparticularphysn/trmtdonebyparticularphysn.component';
import { PhysicianbyidComponent } from './component/physicianbyid/physicianbyid.component';
import { MainhomeComponent } from './component/mainhome/mainhome.component';
import { NursemainComponent } from './component/nursemain/nursemain.component';
import { RegisterdupdateComponent } from './component/nursemain/registerdupdate/registerdupdate.component';
import { SsnupdateComponent } from './component/nursemain/ssnupdate/ssnupdate.component';
import { AddressupdateComponent } from './component/patient/addressupdate/addressupdate.component';
import { UpdatephoneComponent } from './component/patient/updatephone/updatephone.component';
import { UpdatenameComponent } from './component/physician/updatename/updatename.component';
import { UpdatepositionComponent } from './component/physician/updateposition/updateposition.component';
import { PhysicianinfoComponent } from './physicianinfo/physicianinfo.component';
import { TrainedInComponent } from './component/trained-in/trained-in.component';
import { AffiliatedwithComponent } from './component/affiliatedwith/affiliatedwith.component';
import { AddaffiliatedComponent } from './component/addaffiliated/addaffiliated.component';
import { GetphysicianbydeptComponent } from './component/getphysicianbydept/getphysicianbydept.component';

import { GetprimaryaffiliationComponent } from './component/getprimaryaffiliation/getprimaryaffiliation.component';
import { PrimaryaffiliationComponent } from './component/primaryaffiliation/primaryaffiliation.component';
import { AddcertificateComponent } from './component/addcertificate/addcertificate.component';
import { GetphysicianbyprocComponent } from './component/getphysicianbyproc/getphysicianbyproc.component';
import { GetprocbycertificationComponent } from './component/getprocbycertification/getprocbycertification.component';
import { GetpatientbyappointmentidComponent } from './component/getpatientbyappointmentid/getpatientbyappointmentid.component';
import { AddnurseComponent } from './component/addnurse/addnurse.component';
import { FetchnurseComponent } from './component/fetchnurse/fetchnurse.component';
import { AllnursesComponent } from './component/allnurses/allnurses.component';
import { GetphysicianbyappointmentidComponent } from './component/getphysicianbyappointmentid/getphysicianbyappointmentid.component';
import { LoginComponent } from './component/login/login.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { ContactComponent } from './component/contact/contact.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/signup/signup.component';
import { PhysicianCountComponent } from './physician-count/physician-count.component';
import { AddprocedureComponent } from './component/procedure/addprocedure/addprocedure.component';
import { GetcostbyprocedureidComponent } from './component/procedure/getcostbyprocedureid/getcostbyprocedureid.component';
import { ListofproceduresComponent } from './component/procedure/listofprocedures/listofprocedures.component';
import { ProcedureComponent } from './component/procedure/procedure.component';
import { FetchnursebynameComponent } from './component/fetchnursebyname/fetchnursebyname.component';




const routes: Routes = [
  {path:'home',component:HomeComponent},
  { path:'nurse',
  component:NurseComponent

  },
  {
    path:'addnurse',
    component:AddnurseComponent
  },
  {
    path:'fetchnurse',
    component:FetchnurseComponent
  },
  {
    path:'fetchallnurses',
    component:AllnursesComponent
  },
  {
    path:'patient',
    component:PatientComponent
  },
  {
    path:'addpatient',
    component:AddpatientComponent,
  },
  {
    path:'fetchpatient',
    component:FetchpatientComponent
  },
  {
    path:'listofpatient',
    component:ListofpatientComponent
  },
  {
    path:'addphysician',
    component:AddphysicianComponent
  },
  {
    path:'fetchphysician',
    component:FetchphysicianComponent
  },
  {
    path:'listofphysician',
    component:ListofphysicianComponent
  },
  {
    path:'physician',
    component:PhysicianComponent
  },
  {
    path:'department',
    component:DepartmentComponent
  },
  {
    path:'appointment',
    component:AppointmentComponent
  },
  {
    path:'addappointment',
    component:AddappointmentComponent
  },
  {
    path:'allappointments',
    component:AllAppointmentsComponent
  },
  {
    path:'adddepartment',
    component:AdddepartmentComponent

  },
  {
    path:'departmentlist',
    component:DepartmentlistComponent
  },
  {
    path:'fetchdeptid',
    component:FetchdepartmentidComponent
  },
  {
    path:'treatment',
    component:TrmtdonebyparticularphysnComponent
  },
  {
    path:'physicianid',
    component:PhysicianbyidComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'doctor',
    component:DoctorsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    component:MainhomeComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },

  {
    path:'mainnurse',
    component:NursemainComponent
  },
 
  {
    path:'registerupdate',
    component:RegisterdupdateComponent
  },
  {
    path:'ssnupdate',
    component:SsnupdateComponent
  },
  {
    path:'addressupdate',
    component:AddressupdateComponent
  },
  {
    path:'updatephone',
    component:UpdatephoneComponent
  },
  {
    path:'updatename',
    component:UpdatenameComponent
  },
  {
    path:'updateposition',
    component:UpdatepositionComponent
  },
  {
    path:'infophy',
    component:PhysicianinfoComponent
  },
  {
    path:'trainedin',
    component:TrainedInComponent
  },
  {
    path:'affwith',
    component:AffiliatedwithComponent
  },
  {
    path:'addaff',
    component:AddaffiliatedComponent
  },
  {
    path:'getphybydept',
    component:GetphysicianbydeptComponent
  },
  {
    path:'countphy',
    component:PhysicianCountComponent
  },
  {
    path:'getprimaryaff',
    component:GetprimaryaffiliationComponent
  },
  {
    path:'updateaff',
    component:PrimaryaffiliationComponent
  },
  {
    path:'addcertificate',
    component:AddcertificateComponent
  },
  {
    path:'getphybyproc',
    component:GetphysicianbyprocComponent
  },
  {
path:'getprocbycertificate',
component:GetprocbycertificationComponent
  },
  {
    path:'getpatientbyappointmentid',
    component:GetpatientbyappointmentidComponent
  },
  {
    path:'getphysicianbyappointmentid',
    component:GetphysicianbyappointmentidComponent
  },
{
  path:'addproc',
  component:AddprocedureComponent
},
{
  path:'getcostbyprocid',
  component:GetcostbyprocedureidComponent
},
{
  path:'listofproc',
  component:ListofproceduresComponent
},
{
  path:'procedure',
  component:ProcedureComponent
},
{
  path:'nursebyname',
  component:FetchnursebynameComponent
}
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
