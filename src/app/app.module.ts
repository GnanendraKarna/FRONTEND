import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NurseComponent } from './nurse/nurse.component';
import { PatientComponent } from './component/patient/patient.component';
import { ListofpatientComponent } from './component/listofpatient/listofpatient.component';
import { FetchpatientComponent } from './component/fetchpatient/fetchpatient.component';
import { AddpatientComponent } from './component/addpatient/addpatient.component';
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
import { TrainedInComponent } from './component/trained-in/trained-in.component';
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
import { SignupComponent } from './component/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PhysicianCountComponent } from './physician-count/physician-count.component';
import { AddprocedureComponent } from './component/procedure/addprocedure/addprocedure.component';
import { GetcostbyprocedureidComponent } from './component/procedure/getcostbyprocedureid/getcostbyprocedureid.component';
import { ListofproceduresComponent } from './component/procedure/listofprocedures/listofprocedures.component';
import { ProcedureComponent } from './component/procedure/procedure.component';
import { FetchnursebynameComponent } from './component/fetchnursebyname/fetchnursebyname.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NurseComponent,
    AddnurseComponent,
    FetchnurseComponent,
    AllnursesComponent,
    PatientComponent,
    ListofpatientComponent,
    FetchpatientComponent,
    AddpatientComponent,
    AddphysicianComponent,
    FetchphysicianComponent,
    ListofphysicianComponent,
    PhysicianComponent,
    DepartmentComponent,
    AppointmentComponent,
    AddappointmentComponent,
    AllAppointmentsComponent,
    AdddepartmentComponent,
    DepartmentlistComponent,
    FetchdepartmentidComponent,
    TrmtdonebyparticularphysnComponent,
    TrainedInComponent,
    PhysicianbyidComponent,
    MainhomeComponent,
    NursemainComponent,
    RegisterdupdateComponent,
    SsnupdateComponent,
    AddressupdateComponent,
    UpdatephoneComponent,
    UpdatenameComponent,
    UpdatepositionComponent,
    PhysicianinfoComponent,
    AffiliatedwithComponent,
    AddaffiliatedComponent,
    GetphysicianbydeptComponent,
    GetprimaryaffiliationComponent,
    PrimaryaffiliationComponent,
    AddcertificateComponent,
    GetphysicianbyprocComponent,
    GetprocbycertificationComponent,
    GetpatientbyappointmentidComponent,
    GetphysicianbyappointmentidComponent,
    LoginComponent,
    AboutUsComponent,
    DoctorsComponent,
    ContactComponent,
    SignupComponent,
    NavbarComponent,
    PhysicianCountComponent,
    AddprocedureComponent,
    GetcostbyprocedureidComponent,
    ListofproceduresComponent,
    ProcedureComponent,
    FetchnursebynameComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
