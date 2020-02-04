import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../shared/services/utils.service';
import { environment } from '../../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../shared/services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chang-password',
  templateUrl: './chang-password.component.html',
  styleUrls: ['./chang-password.component.css']
})
export class ChangPasswordComponent implements OnInit {
  changePassword: FormGroup;
  submitted:boolean = false;
  constructor(private utils: UtilsService, fb: FormBuilder, private api: HttpService, private router: Router) {
    this.changePassword = fb.group({
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required]
    },{
      validator: this.MustRePassMatch('new_password', 'confirm_password')
    });
  }

  ngOnInit() {
    this.utils.scrollToTop();
  }

  get f(){ return this.changePassword.controls; }

  submit(){
    debugger
    this.submitted = true;
    if(this.changePassword.invalid) return;
    
    let dataToSend = {
      old_password: this.changePassword.value.old_password,
      new_password: this.changePassword.value.new_password
    };
    this.api.changePassword(dataToSend).subscribe(
      data=> {
        this.utils.alert('success', data['message']);
        this.router.navigate(['/profile']);
      },
      error=> {
        console.log(error);
        this.utils.alert('error', error['error']['message']);
        if(error['status'] == 400){
          this.router.navigate(['/login']);
          this.utils.removeData('zaoplus_admin_data');
        }
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
