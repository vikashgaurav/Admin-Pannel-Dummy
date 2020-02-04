import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: FormGroup;
  submitted:boolean = false;
  url_params:any;
  admin_email:any;
  constructor(fb:FormBuilder, 
    private activeRoute: ActivatedRoute, 
    private utils: UtilsService, 
    private router: Router, 
    private api: HttpService
  ) {
    this.resetPassword = fb.group({
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    },{
      validator: this.MustRePassMatch('new_password', 'confirm_password')
    });
    this.admin_email = this.utils.get('admin_email');
  }
  adminData
  ngOnInit() {
    this.adminData = this.utils.get('zaoplus_admin_data');
    console.log(this.adminData)
  }

  get f(){ return this.resetPassword.controls; }

  submit(){
    debugger
    this.submitted = true;
    if(this.resetPassword.invalid) return;
    let dataToSend = {
      _id: this.adminData._id,
      password: this.resetPassword.value.new_password
    };
    this.api.resetPassword(dataToSend).subscribe(
      data=> {
        this.utils.alert('success', data['message']);
        this.router.navigate(['/login']);
      },
      error=> {
        this.utils.alert('error', error['error']['message']);
        debugger;
      }
    );
  }

  MustRePassMatch(controlRePassName: string, matchingRePassControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlRePassName];
        const matchingRePassControl = formGroup.controls[matchingRePassControlName];
        if (matchingRePassControl.errors && !matchingRePassControl.errors.mustMatch) {
            return;
        }
        if (control.value !== matchingRePassControl.value) {
          matchingRePassControl.setErrors({ mustMatch: true });
        } else {
          matchingRePassControl.setErrors(null);
        }
    }
  }
}
