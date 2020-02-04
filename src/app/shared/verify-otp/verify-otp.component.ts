
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  forgotPassword: any = {};
  constructor(
    private api: HttpService,
    private utils: UtilsService,
    private router: Router
  ) { }
  adminData;
  ngOnInit() {
    this.adminData = this.utils.get('zaoplus_admin_data');
    console.log(this.adminData)
  }

  onSubmit() {
    debugger
    this.api.verifyotp({ verification_code: this.forgotPassword.verification_code,_id:this.adminData._id }).subscribe(
      data => {
        if (data['status'] == -1) {
          this.utils.alert('warn', data['message']);
          this.utils.set('zaoplus_admin_data', data['response']);
          this.router.navigate(['/reset-password']);
        }
        this.utils.alert('success', data['message']);
        this.router.navigate(['/reset-password']);
      },
      error => {
        console.log(error);
        this.utils.alert('error', error['error']['message']);
        debugger;
      }
    );
  }
}
