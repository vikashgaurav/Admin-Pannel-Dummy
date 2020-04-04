import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './shared/reset-password/reset-password.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

import { ReportsComponent } from './layout/reports/reports.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { EditProfileComponent } from './layout/edit-profile/edit-profile.component';
import { ChangPasswordComponent } from './layout/chang-password/chang-password.component';
import { UserManagementComponent } from './layout/user-management/user-management.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { ContentManagementComponent } from './layout/content-management/content-management.component';
import { VerifyOtpComponent } from './shared/verify-otp/verify-otp.component';
import { ProfessionalManagementComponent } from './layout/professional-management/professional-management.component';
import { JobCategoriesComponent } from './layout/job-categories/job-categories.component';
import { FarmerListComponent } from './layout/farmer-list/farmer-list.component';
import { SupplierListComponent } from './layout/supplier-list/supplier-list.component';
import { AgronomistListComponent } from './layout/agronomist-list/agronomist-list.component';
import { AuthGuard } from './shared/services/auth.guard.service';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  { path: 'VerifyOtp', component: VerifyOtpComponent},
  {path: 'reset-password', component:ResetPasswordComponent},
  { path: 'content_management', component: ContentManagementComponent },
  {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard]},
  {path: 'change-password', component: ChangPasswordComponent, canActivate: [AuthGuard]},
  {path: 'setting', component: SettingsComponent, canActivate: [AuthGuard]},
  { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard]},
  { path: 'professional-management', component: ProfessionalManagementComponent, canActivate: [AuthGuard] },
  { path: 'job-categorie', component: JobCategoriesComponent, canActivate: [AuthGuard] },
  { path: 'farmer_list', component: FarmerListComponent, canActivate: [AuthGuard] },
  { path: 'supplier_list', component: SupplierListComponent, canActivate: [AuthGuard] },
  { path: 'agronomist_list', component: AgronomistListComponent, canActivate: [AuthGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
