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

import { UserManagementComponent } from './layout/user-management/user-management.component';
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

import { ContentManagementComponent } from './layout/content-management/content-management.component';
import { BodysystemComponent } from './layout/bodysystem/bodysystem.component';
import { VerifyOtpComponent } from './shared/verify-otp/verify-otp.component';

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
    UserManagementComponent,
    ContentManagementComponent,
    BodysystemComponent,
    VerifyOtpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
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
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
