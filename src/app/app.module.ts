import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftSidebarComponent } from './common/left-sidebar/left-sidebar.component';
import { LoginComponent } from './shared/login/login.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ReportsComponent } from './layout/reports/reports.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { EditProfileComponent } from './layout/edit-profile/edit-profile.component';
import { ChangPasswordComponent } from './layout/chang-password/chang-password.component';
// import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { CKEditorModule } from 'ngx-ckeditor';
import { 
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import { ExcelService } from './shared/services/excel.service';
import { CookieService } from 'ngx-cookie-service';

import { VerifyOtpComponent } from './shared/verify-otp/verify-otp.component';
import { JobCategoriesComponent } from './layout/job-categories/job-categories.component';
import { FarmerListComponent } from './layout/farmer-list/farmer-list.component';
import { SupplierListComponent } from './layout/supplier-list/supplier-list.component';
import { AgronomistListComponent } from './layout/agronomist-list/agronomist-list.component';
import { EductionListComponent } from './layout/eduction-list/eduction-list.component';
import { InstituteListComponent } from './layout/institute-list/institute-list.component';
import { IdCardListComponent } from './layout/id-card-list/id-card-list.component';
import { AgroTechSpecComponent } from './layout/agro-tech-spec/agro-tech-spec.component';
import { AdminCropComponent } from './layout/admin-crop/admin-crop.component';
import { BankListComponent } from './layout/bank-list/bank-list.component';
import { ProductCategoriesComponent } from './layout/product-categories/product-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ReportsComponent,
    SettingsComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangPasswordComponent,
    VerifyOtpComponent,
    JobCategoriesComponent,
    FarmerListComponent,
    SupplierListComponent,
    AgronomistListComponent,
    EductionListComponent,
    InstituteListComponent,
    IdCardListComponent,
    AgroTechSpecComponent,
    AdminCropComponent,
    BankListComponent,
    ProductCategoriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
     preventDuplicates: true}),
    CKEditorModule,
    
    MatTableModule,
    MatPaginatorModule
    // ChartsModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    },
    ExcelService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
