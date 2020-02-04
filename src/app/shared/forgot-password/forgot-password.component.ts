import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { UtilsService } from '../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassword: any = {};
  constructor(
    private api: HttpService,
    private utils: UtilsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.api.forgotPassword({email: this.forgotPassword.email}).subscribe(
      data=> {
        if(data['status'] == -1){
          this.utils.alert('warn', data['message']);
          this.utils.set('zaoplus_admin_data', data['response']);
          this.router.navigate(['/VerifyOtp']);
          return;
        }
        this.utils.alert('success', data['message']);
        this.utils.set('zaoplus_admin_data', data['response']);
        this.router.navigate(['/VerifyOtp']);
      },
      error=> {
        console.log(error);
        this.utils.alert('error', error['error']['message']);
        debugger;
      }
    );
  }
}
